const chalk = require('chalk')

const color = (text, color) => {
return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

const mylog = (text, color) => {
return !color ? chalk.greenBright('[ WHATSAPP BOT ] ') + chalk.magentaBright(text) : chalk.greenBright('[ WHATSAPP BOT ] ') + chalk.keyword(color)(text)
}

module.exports = { color, mylog }