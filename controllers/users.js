const { usersModel } = require('../models');
const { matchedData } = require('express-validator');
const { handleHttpError } = require('../utils/handleHttpError');
const { encrypt } = require('../utils/hndlePassword');


const getUsers = async (req, res) => {
    try {
        const data = await usersModel.find({});
        // const data = 'data from getUser of user controller'
        // console.log(data
        res.send({data});
    } catch (error) {
        handleHttpError(res, "ERROR_GET_USERS");
    }
};


const createUser = async (req, res) => {
    try {
        const bodyClean = matchedData(req);
        const password = await encrypt(toString(bodyClean.password));
        // bodyClean = ;
        // console.log(body);
        const data = await usersModel.create({...bodyClean, password});
        data.set('password', undefined, {strict:false});
        res.send({ data });
    } catch (error) {
        handleHttpError(res, "ERROR_CREATE_USER");
    };
};

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
    }
};

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
    }
};


const loginUser = async (req, res) => {
    try {
        req = matchedData(req);
        const {id} = req;
        const data = await usersModel.findById(id);
        // const data = 'data from getUser of user controller'
        // console.log(data
        res.send({data});
    } catch (error) {
        handleHttpError(res, "ERROR_GET_USER");
    }
};



module.exports = { getUsers, getUser, createUser, updateUser, deleteUser, loginUser };