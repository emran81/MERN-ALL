const mongoose = require('mongoose')
const validator = require('validator');
const Schema = mongoose.Schema

const ContactSchema = new Schema({
    name :{
        type: String,
        trim:true,
        required:true,
        minlength:3,
        
    },
    phone:{
        type:String,
        trim:true,
        required:true,
        unique:true
    },
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
    }
    })

    const Contact = mongoose.model('Contact', ContactSchema)

    module.exports = Contact;

   /* app.get('/demo', (req, res)=>{
        const demo =new Demo({
            name: "Omur",
            phone:"01712917872"
        })
        demo.save()
        .then(data=>{
            res.json({data})
        })
        .catch(err=>console.log(err))
    })
    app.get('/get', (req, res)=>{
        Demo.find()
        .then(data=>{
            res.json(data)
        })
        .catch(err=>console.log(err))
    })
    */                              