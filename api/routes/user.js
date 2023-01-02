const express =require('express')
const router = express.Router()
const userController =require('../controlers/user')
const authenicket = require('../medelWere/authentact')


router.post('/login', userController.loginController)
router.post('/register', userController.registerContriller)
router.get('/', authenicket, userController.getAllUser)

module.exports = router