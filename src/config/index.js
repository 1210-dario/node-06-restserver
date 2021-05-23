 const dotenv = require('dotenv');

 const envFound = dotenv.config();
//Validacion de que existe nuestro archivo .env
 if(!envFound){
     throw new Error("Couldn't find .env file.");
 };
//Aca estamos estableciendo el Ambiente o enviroment en el que estamos trabajando, en este caso desarrollo o development
 process.env.NODE_ENV = process.env.NODE_ENV || 'development' ;
//Aca exportamos las propiedades de nuestra aplicación
 module.exports = {
     //puerto donde se ejecuta la app
     port: process.env.PORT,
     //definimos un prefijo donde aparte de localhost:3000 vamos a tener en este caso localhost:3000/api/v1 para por ejemplo ver la version de nuestra api, entonces todos nuestros servicios van a empezar con /api/v1 y lo que siga.
     api:{
         prefix: '/api/v1'
     },
     log:{
         level: process.env.LOG_LEVEL
     },
     swagger: {
         path:'/documentation'
     }
 }

