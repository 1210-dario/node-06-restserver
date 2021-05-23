const { Router } = require('express');
const {
    getAllUsers,
    createUser,
    updateUser,
    updatePartialUser,
    deleteUser
} = require('../controllers/users');

const router = Router();
//Creando manejadores de rutas
//con el :id estamos indicando que es una ruta dinamica y que en este caso va a ingresar el id por la url
//la raíz del sitio es ('/') puede ser otra como en el caso con el id 
router.get('/', getAllUsers);
router.post('/', createUser);
router.put('/:id', updateUser);
router.patch('/:id', updatePartialUser);
router.delete('/:id', deleteUser);

module.exports = router;