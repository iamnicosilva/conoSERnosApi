const { usersModel } = require('../models');


const getUser = async (req, res) => {
    const data = await usersModel.find({});
    // const data = 'data from getUser of user controller'
    // console.log(data
    res.send({data});
};
const createUser = async (req, res) => {
    const { body } = req;
    // console.log(body);
    const data = await usersModel.create(body)
    res.send({data});
};
const updateUser = (req, res) => {};
const deleteUser = (req, res) => {};

module.exports = { getUser, createUser, updateUser, deleteUser };