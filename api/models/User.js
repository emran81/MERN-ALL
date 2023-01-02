const mongoose = require('mongoose')
const validator = require('validator')
const Contact = require('../controlers/user')
const Schema = mongoose.Schema
mongoose.set('strictQuery', false);



const userSchema = new Schema({
    email:{
        type: String,
        trim:true,
       unique:true,
       validate: {
        validator: (v)=>{
            return validator.isEmail(v)
        },
        massage:`{VALUE} is not email`
       }
    },
    password:'String'
})

const User=mongoose.model("User", userSchema)
module.exports = User