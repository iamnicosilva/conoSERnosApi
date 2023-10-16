const { check } = require('express-validator');
const validateResults = require('../utils/handlervalidator');


const validatorCreateUser = [
    check("name")
    .exists()
    .notEmpty()
    .isLength({min:5,max:90})
    .isString(),
    check('email')
    .exists()
    .notEmpty()
    .isEmail({min:5,max:90})
    .withMessage('Not a valid e-mail address'),
    check('password')
    .exists().notEmpty()
    .isLength({min:8,errorMessage: 'Password should be at least 8 chars'}),
    check('credits')
    .exists()
    .notEmpty()
    .isNumeric(),
    (req, res, next) => validateResults(req, res, next)
];

const validatorGetUser = [
    check("id")
    .exists()
    .notEmpty()
    .isMongoId(),
    (req, res, next) => validateResults(req, res, next)
];

module.exports = { validatorCreateUser, validatorGetUser };
