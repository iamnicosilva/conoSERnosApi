const express = require('express');
const router = express.Router();
const { validatorRegisterUser, validatorGetUser, validatorLoginUser } = require('../validators/users')
const { getUsers, getUser, createUser, updateUser, deleteUser, loginUser } = require('../controllers/users')
const customHeader = require('../middleware/customHeader')


// LISTA TODOS LOS UDUARIOS:
router.get('/', getUsers);

// TRAE UN USUARIO POR ID;
router.get('/:id', validatorGetUser, getUser);

// ACTUALIZA UN USUARIO POR ID:
router.put('/:id', validatorGetUser, validatorRegisterUser, updateUser);

// ELIMINA UN USUARIO POR ID:
router.delete('/:id', validatorGetUser, deleteUser);

// LOGUEA UN USUARIO:
router.post('/login', validatorLoginUser, loginUser);

// REGISTRA UN USUARIO CON TODOS SUS DATOS:
router.post('/register', validatorRegisterUser, createUser);





module.exports = router;