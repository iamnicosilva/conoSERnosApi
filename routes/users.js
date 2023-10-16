const express = require('express');
const router = express.Router();
const { validatorCreateUser, validatorGetUser } = require('../validators/users')
const { getUsers, getUser, createUser, updateUser, deleteUser, loginUser } = require('../controllers/users')
const customHeader = require('../middleware/customHeader')

router.get('/', getUsers);
router.get('/:id', validatorGetUser, getUser);
router.post('/register', validatorCreateUser, createUser);
router.put('/:id', validatorGetUser, validatorCreateUser, updateUser);
router.delete('/:id', validatorGetUser, deleteUser);
router.get('/:id', validatorGetUser, loginUser);








module.exports = router;