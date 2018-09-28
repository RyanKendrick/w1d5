var chalk = require("chalk");

var message = chalk.bgMagentaBright("Hello ") + chalk.cyanBright("World");
console.log(message);