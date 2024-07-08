require('../config')
const { default: LexxyBotConnect, delay, jidNormalizedUser, PHONENUMBER_MCC, makeCacheableSignalKeyStore, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion,getContentType, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = require("@whiskeysockets/baileys")
const fs = require('fs')
const pino = require('pino')
const { join } = require("path");
const { await, getBuffer, fetchJson } = require('../lib/myfunc')
const makeWASocket = require("@whiskeysockets/baileys").default
const readline = require("readline")
const NodeCache = require("node-cache")
const chalk = require('chalk')
const util = require("util")
const { color, mylog } = require('../lib/color');

const store = makeInMemoryStore({
logger: pino().child({
level: 'silent',
stream: 'store'
})
})

let phoneNumber = global.botNumber

const pairingCode = !!phoneNumber || process.argv.includes("--pairing-code")
const useMobile = process.argv.includes("--mobile")

const xlec = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (text) => new Promise((resolve) => xlec.question(text, resolve))

async function connectToWhatsApp() {
let { version, isLatest } = await fetchLatestBaileysVersion();
const { state, saveCreds } = await useMultiFileAuthState(join(__dirname, "./session"));
const msgRetryCounterCache = new NodeCache() // for retry message, "waiting message"
const leccy = makeWASocket({
logger: pino({ level: 'silent' }),
printQRInTerminal: !pairingCode, // Popping up QR in terminal log
mobile: useMobile, // Mobile Api (prone to bans)
auth: {
creds: state.creds,
keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" }).child({ level: "fatal" })),
},
browser: ["Ubuntu", "Chrome", "20.0.04"], // For this issues https://github.com/WhiskeySockets/Baileys/issues/328
version,
patchMessageBeforeSending: (message) => {
const requiresPatch = !!(
message.buttonsMessage ||
message.templateMessage ||
message.listMessage
);
if (requiresPatch) {
message = {
viewOnceMessage: {
message: {
messageContextInfo: {
deviceListMetadataVersion: 2,
deviceListMetadata: {},
},
...message,
},
},
};
}
return message;
},
getMessage: async (key) => {
let jid = jidNormalizedUser(key.remoteJid)
let msg = await store.loadMessage(jid, key.id)
return msg?.message || ""
},
markOnlineOnConnect: true, // set false for offline
generateHighQualityLinkPreview: true,
msgRetryCounterCache,
})

store.bind(leccy.ev)

if (pairingCode && !leccy.authState.creds.registered) {
if (useMobile) console.log('Cannot use pairing code with mobile api');
console.log(chalk.cyan('┌──────────────┈'));
console.log(`│• ${chalk.redBright('Silakan Tulis Nomor Whatsapp Anda')}`);
console.log(`│• ${chalk.redBright('Contoh : 628xxxxx')}`);
console.log(chalk.cyan('└──────────────┈'));

let phoneNumber
if (!!phoneNumber) {
phoneNumber = phoneNumber.replace(/[^0-9]/g, '')
if (!Object.keys(PHONENUMBER_MCC).some(v => phoneNumber.startsWith(v))) {
console.log(chalk.bgBlack(chalk.redBright("Start with country code of your WhatsApp Number, Example : 628xxxxxxxx")))
process.exit(0)
}
} else {
phoneNumber = await question(chalk.bgBlack(chalk.greenBright(`Your WhatsApp Number : `)))
phoneNumber = phoneNumber.replace(/[^0-9]/g, '')

// Ask again when entering the wrong number
if (!Object.keys(PHONENUMBER_MCC).some(v => phoneNumber.startsWith(v))) {
console.log(chalk.bgBlack(chalk.redBright("Start with country code of your WhatsApp Number, Example : 628xxxxxxxx")))

phoneNumber = await question(chalk.bgBlack(chalk.greenBright(`Your WhatsApp Number : `)))
phoneNumber = phoneNumber.replace(/[^0-9]/g, '')
xlec.close()
}
}

setTimeout(async () => {
let code = await leccy.requestPairingCode(phoneNumber)
code = code?.match(/.{1,4}/g)?.join("-") || code
console.log(chalk.bgBlack(chalk.greenBright(`Copy Pairing Code :`)), chalk.black(chalk.white(code)))
}, 2000)
}

leccy.ev.on('messages.upsert', async chatUpdate => {
try {
msg = chatUpdate.messages[0]
if (!msg.message) return
require("../index")(leccy, msg, store)
} catch (err) {
console.log(err)
}
})

leccy.ev.on('connection.update', (update) => {
console.log('Connection Update :', update)
if (update.connection === 'open'){
console.log(mylog("Connected " + leccy.user.id))
} else if (update.connection === 'close'){
console.log(mylog("Disconnected!"))
connectToWhatsApp()
}
})

leccy.sendTextWithMentions = async (jid, text, quoted, options = {}) => leccy.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })

leccy.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
} 

leccy.sendmentions = (dia, teks, mems = [], id) => {
if (id == null || id == undefined || id == false) {
let res = leccy.sendMessage(dia, { text: teks, mentions: mems }, { quoted: msg })
return res
} else {
let res = leccy.sendMessage(dia, { text: teks, mentions: mems }, { quoted: msg })
return res
}}

leccy.ev.on('creds.update', saveCreds)

return leccy
}

connectToWhatsApp()
.catch(err => console.log(err))

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})