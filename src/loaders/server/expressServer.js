const express = require('express');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const config = require('../../config');
const logger = require('../logger');



class ExpressServer {

    constructor(){
        this.app = express();
        this.port = config.port;
        this.basePathUser = `${config.api.prefix}/users`;

        this._middlewares();

        this._swaggerConfig();

        this._routes();

        this._notFound();
        this._errorHandler();


    }
    //Metodo Privado solo lo llamo desde el constructor
    _middlewares(){
        this.app.use(express.json());
        this.app.use(morgan('tiny'));        
    }
    //Rutas 
    _routes () {

        this.app.head("/status", (req, res) =>{
            res.status(200).end();
        })
        //En esta linea seteamos por donde van a entrar las rutas, en este caso/api/v1/users
        this.app.use(this.basePathUser,require('../../routes/users'))
    }
    //Instanciamos el error como Middleware y con la función next() sigue el codigo, en este caso persistimos el err osea error
    _notFound(){
        this.app.use((req, res, next) => {
            const err = new Error("Not Found");            
            err.code = 404;
            next(err);
        });

    }
    //Manejamos el error que obtenemos del middleware _notFound
    _errorHandler(){
        this.app.use((err, req, res , next) => {
            const code = err.code || 500;
            logger.error(`${code} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
            logger.error(err.stack);            
            const body = {
                error: {
                    code,
                    message: err.message
                }
            }
            res.status(code).json(body);

        });
    }
    //Configuramos Swagger para la documentacion
    _swaggerConfig(){
        this.app.use(
            config.swagger.path,
            swaggerUi.serve,
            swaggerUi.setup(require('../swagger/swagger.json'))
        );

    }
    //Funcion Async donde se "inicia" el servidor ya que tengo el .listen aqui
    async start() {
        this.app.listen(this.port, (error) => {
            if(error){
                logger.error(err);                
                process.exit(1);
                return;
            }
            
        });
        
    }
}

module.exports = ExpressServer;