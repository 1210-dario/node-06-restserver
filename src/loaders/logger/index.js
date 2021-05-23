const winston = require('winston');
const config = require('../../config')

//Con winston vamos a manejar los logs para el ambiente de desarrollo y produccion.

const transports = [];
transports.push(
    new winston.transports.Console(),
);

const loggerInstance = winston.createLogger({
    level: config.log.level,
    format:winston.format.simple(),
    transports 
})

module.exports = loggerInstance;