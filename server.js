const express = require("express");
const morgan = require('morgan')
const bodyPerser = require('body-parser')
const cors =require('Cors')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/reactapi')

mongoose.set('strictQuery', true);
const db = mongoose.connection
db.on('error',(err)=>{
    console.log(err)
})
db.once('open',()=>{
    console.log('Data base connect')
})
const contRoure = require('./api/routes/contract')
const userRoute = require('./api/routes/user')
mongoose.set('strictQuery', true);
//mongoose.set('strictQuery', false);

//const Schema= mongoose.Schema


const app=express();
app.use(morgan('dev'));
app.use(bodyPerser.urlencoded({extended:true}));
app.use(bodyPerser.json())
app.use(cors())
const PORT = process.env.PORT || 3000;


app.use('/api/contacts', contRoure)
app.use('/api/users', userRoute)


app.get('/',(req,res)=>{
    res.send('hi i am emran')
})


app.listen(PORT,()=>{
    console.log(`Server is runnong on ${PORT}`);
})