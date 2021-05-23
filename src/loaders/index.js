const ExpressServer = require('./server/expressServer');
const config = require('../config');
const logger = require('./logger');

//Exporto la función que Instancia e Inicia el Servidor
module.exports = async() => {
    //Instancio el Servidor
    const server = new ExpressServer();
    logger.info('Express Loaded');
    //Inicio el Servidor
    server.start();
    logger.info(`########################################
        Server listening on port: ${config.port}
        ########################################
    `);
    
}