const jwt = require('jsonwebtoken');
const { handleHttpError } = require('./handleHttpError');
const JWT_SECRET = process.env.JWT_SECRET;

// FIRMAR TOKEN (HAY QUE PASARLE OBJETO USER)
const tokenSign = async (user) => {
    const sign = jwt.sign({ _id: user._id }, JWT_SECRET, { expiresIn: '2h' });
    return sign;
};


// VERIFICAR TOKEN (HAY QUE PASAR EL TOKEN DE SESION JWT)
const verifyToken = async (tokenJwt) => {
    try {
        return jwt.verify(tokenJwt, JWT_SECRET);
    } catch (error) {
        return handleHttpError(null,'TOKEN_DE_SESION_INVALIDO', 403)
    };
};


module.exports = { tokenSign, verifyToken };