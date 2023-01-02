const jwt = require('jsonwebtoken')


const autication = (req, res, next)=>{
    try{
        const token =req.headers.authorization.split('')[1]
        const decord =jwt.verify(token,'SECRET')

        req.user=decord
        next()

    }catch(error){
    res.json({
        massage:'Authication failf'
    })
    }
}
module.exports = autication