const bcrypts = require('bcryptjs');


const encrypt = async (passwordPlain) =>{
    const hash = await bcrypts.hash(passwordPlain, 13);
    return hash;
};

const compare = async (passwordPlain, hashPassword) =>{
    const auth = await bcrypts.compare(passwordPlain, hashPassword);
    return auth;
};


module.exports = {encrypt, compare}