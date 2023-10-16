const mongoose = require('mongoose');
const mongoDelete = require('mongoose-delete');


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
            type:String,
            select: false
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


UserSchema.plugin(mongoDelete, { overrideMethods: "all" });
module.exports = mongoose.model('users',UserSchema)