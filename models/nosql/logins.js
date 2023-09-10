const LoginsSchema = new mongoose.Schema(
    {
        login:{
            type:Date
        },
        buy:{
            type:Number,
        },
        spend:{
            type:Number
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
);

module.exports = mongoose.model('logins',LoginsSchema)