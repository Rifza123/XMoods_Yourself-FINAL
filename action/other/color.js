const chalk = require('chalk')
const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}
const bgcolor = (text, bgcolor) => {
	return !bgcolor ? chalk.green(text) : chalk.bgKeyword(bgcolor)(text)
}
const biocolor = (text, bgcolor) => {
	return !bgcolor ? chalk.green.bold(text) : chalk.bgKeyword(bgcolor)(text)
}
const ConsoleLog = (text, color) => {
	return !color ? chalk.yellow('[RIFZA] ') + chalk.green(text) : chalk.yellow('[Rifza ') + chalk.keyword(color)(text)
}
module.exports = {
color,
bgcolor,
biocolor,
ConsoleLog
}