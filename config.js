const fs = require('fs')
const chalk = require('chalk')

// ganti info bot dibawah ini
global.botName = "Xtree 2.9"
global.ownerName = "Noah's"
global.botNumber = "22898555306"
global.devNumber = ["6282230049011"]

global.Auto_Typing = false // auto typing
global.Auto_Recording = false // auto recording
global.Auto_ReadPesan = false // auto read messages

global.domain = "https://example.id" // Ganti Domain Lu
global.key_plta = "-" // Isi Apikey Plta Lu
global.key_pltc = "-" // Isi Apikey Pltc Lu
global.nama_host = "LECCYOFC" // Ganti Nama Store Atau nama Host Lu

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
