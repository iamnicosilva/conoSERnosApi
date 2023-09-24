const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
        juego:{
            type:String
        },
        contenido:{
            type:String,
            unique: true
        },
        coeficiente:{
            type:Number
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
);

module.exports = mongoose.model('cards',UserSchema)