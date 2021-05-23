const express = require('express');

//La idea es que aca solo deberiamos manejar la logica del controller y no del service.
//De esta manera hacemos que los parametros req y res sean los que utiliza express como request y response
/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const getAllUsers = (req, res)=>{
    const users = [{
        id: 1,
        name: 'Dario'
    },
    {
        id: 2,
        name: 'Maria'
    }]
    res.json(users);
};

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const createUser = (req, res) => {

    const user = req.body;
    user.id = 85689;

    const result = {
        message: 'User created',
        user
    }
    //con el .status() ingresamos dentro el código http que deberia devolver la petición
    res.status(201).json(result);        
};

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const updateUser = (req, res)=>{

    const {id} = req.params;
    const user = req.body;

    user.id = id;

    const result = {
        message: 'User updated',
        user
    }
    res.json(result);

};

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const updatePartialUser = (req, res)=>{

    const result = {
        message: 'User updated with patch'
    }
    res.json(result);
};

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const deleteUser = (req, res)=>{

    const {id} = req.params;
    //const id = req.params.id;
    
    const result = {
        message:`User with id: ${id} deleted`
    }
    res.json(result);
};


module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    updatePartialUser,
    deleteUser
}