const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
        name:{
            type:String
        },
        email:{
            type:String,
            unique: true
        },
        password:{
            type:String
        },
        credits:{
            type:Number
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
);

module.exports = mongoose.model('users',UserSchema)