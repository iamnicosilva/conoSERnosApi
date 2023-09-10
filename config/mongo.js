const mongoose = require('mongoose');

const dbConnect = () => {
    const DB_URI = process.env.DB_URI;
    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then( () => console.log('***** CONEXION DB EXITOSA *****'))
    .catch( (err) => {console.log('***** CONEXION DB FALLIDA ***** Error: '+err);});
};

module.exports = dbConnect;

