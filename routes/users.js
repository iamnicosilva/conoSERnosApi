const express = require('express');
const router = express.Router();
const { validatorCreateUser } = require('../validators/users')
const { getUser, createUser } = require('../controllers/users')
const customHeader = require('../middleware/customHeader')

router.get('/', getUser);
router.post('/', validatorCreateUser, customHeader, createUser);





module.exports = router;