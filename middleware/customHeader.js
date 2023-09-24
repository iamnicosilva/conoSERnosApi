const customHeader = (req, res, next) => {
    try {
        const apiKey = req.headers.api_key;
        if (apiKey === 'clave_publica_123') {
            next();
        } else {
            res.status(403);
            res.send({error:"API_KEY:INCORRECTO"});
        };
    } catch (e) {
        res.status(403);
        res.send({error:"HAY_UN_PROBLEMA_EN_EL_CUSTOM_HEADER"});
    };
};



module.exports = customHeader;