const bcrypts = require('bcryptjs');


const encrypt = async (passwordPlain) =>{
    passwordPlain = passwordPlain.toString();
    const hash = await bcrypts.hash(passwordPlain, 13);
    return hash;
};

// const compare = async (passwordPlain, hashPassword) =>{
//     passwordPlain = toString(passwordPlain);
//     const auth = await bcrypts.compare(passwordPlain, hashPassword);
//     return auth;
// };
const compare = async (passwordPlain, hashPassword) => {
    try {
        const auth = await bcrypts.compare(passwordPlain, hashPassword);
        return auth;
    } catch (error) {
        throw new Error('Error al comparar contraseñas: ' + error);
    }
};


module.exports = {encrypt, compare}