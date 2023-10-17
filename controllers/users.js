const { usersModel } = require('../models');
const { matchedData } = require('express-validator');
const { handleHttpError } = require('../utils/handleHttpError');
const { encrypt, compare } = require('../utils/handlePassword');
const { tokenSign } = require('../utils/handleJwt');

// LISTA TODOS LOS UDUARIOS:
const getUsers = async (req, res) => {
    try {
        const data = await usersModel.find({});
        // const data = 'data from getUser of user controller'
        // console.log(data
        res.send({data});
    } catch (error) {
        handleHttpError(res, "ERROR_GET_USERS");
    };
};


// REGISTRA UN USUARIO CON TODOS SUS DATOS:
const createUser = async (req, res) => {
    // try {
        const bodyClean = matchedData(req);
        const password = await encrypt(bodyClean.password);
        // bodyClean = ;
        // console.log(body);
        const dataUser = await usersModel.create({...bodyClean, password});
        dataUser.set('password', undefined, {strict:false});
        const sesionToken = await tokenSign(dataUser)
        const data = {
            token: sesionToken,
            user: dataUser
        };
        res.send({ data });
    // } catch (error) {
        // handleHttpError(res, "ERROR_CREATE_USER");
    // };
};


// TRAE UN USUARIO POR ID;
const getUser = async (req, res) => {
    try {
        req = matchedData(req);
        const {id} = req;
        const data = await usersModel.findById(id);
        // const data = 'data from getUser of user controller'
        // console.log(data
        res.send({data});
    } catch (error) {
        handleHttpError(res, "ERROR_GET_USER");
    };
};


// ACTUALIZA UN USUARIO POR ID:
const updateUser = async (req, res) => {
    try {
        // SACO ID Y GUARDO EN ID POR UN LADO Y EL RESTO LO GUARDO EN BODYCLEAN
        const {id, ...bodyClean} = matchedData(req);
        // const bodyClean = matchedData(req);
        // const {id} = bodyClean;
        // console.log(body);
        const data = await usersModel.findOneAndUpdate({ _id: id } , bodyClean);
        res.send({ data });
    } catch (error) {
        handleHttpError(res, "ERROR_UPDATE_USER");
    };
};


// ELIMINA UN USUARIO POR ID:
const deleteUser = async (req, res) => {
    // SOFT DELETE
    try {
        req = matchedData(req);
        const {id} = req;
        const data = await usersModel.delete({_id: id});
        // const data = 'data from getUser of user controller'
        // console.log(data
        res.send({data});
    } catch (error) {
        handleHttpError(res, "ERROR_DELETE_USER");
    };
};


// LOGUEA UN USUARIO:
const loginUser = async (req, res) => {

    try {
        req = matchedData(req);
        const user = await usersModel.findOne({email: req.email}).select('password');


        if ( !user ) {
            handleHttpError(res, "ERROR_USER_NOT_EXISTS", 404);
            return;
        };

        req.password = req.password.toString();

        const check = await compare(req.password, user.password);

        if ( !check ) {
            handleHttpError(res, "ERROR_INVALID_PASSWORD", 401);
            return;
        };

        const data = {
            token: await tokenSign(user),
            user
        }


        res.send({data});
    } catch (error) {
        console.log(error);
        handleHttpError(res, "ERROR_LOGIN_USER");
    };
};




module.exports = { getUsers, getUser, createUser, updateUser, deleteUser, loginUser };