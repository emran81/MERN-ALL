const bcrypt = require('bcrypt')
const User = require('../models/User')
const { use } = require('../routes/contract')
const jwt = require('jsonwebtoken')


const registerContriller=(req, res, next)=>{
bcrypt.hash(req.body.password, 10 ,(err,hash)=>{
    if(err){
        res.json({
            error:err
        })
    }
    let user = new User({
        email: req.body.email,
        password: hash
    })
    user.save()
        .then(result=>{
            res.status(201).json({
                massage:'registation successfully',
                user: result
            })
        })
        .catch(error=>{
            req.jsor({
                error
            })
        })
})

}

//login controller
const loginController =(req, res, next)=>{
    let email = req.body.email
    let password = req.body.password
    User.findOne({email})
    .then(user=>{
        
            if(user) {
                bcrypt.compare(password, user.password, (error, result)=>{
                    if(error){
                        res.json({
                            massage:'error occud'
                        })
                    }
                    if(result){

                        let token = jwt.sign({email:user.email, _id:user._id},'SECRET',{expiresIn:'2h'})
                        res.json({
                            massage:'Login successfull',
                            token
                        })

                    }else{
                        res.json({
                            massage:'Login faild password or emain Doesn\'t match'
                        })

                    }
                })
            }else{
                res.json({
                    massage:'email not found'
                })
            }
        })                                          
    
}
const getAllUser =(req, res, next)=>{
    User.find()
        .then(users=>{
            res.json({
                users
            })
        })
        .catch(err=>{
            res.json({
                err
            })
        })
}

module.exports={
    registerContriller, 
    getAllUser,
    loginController
}