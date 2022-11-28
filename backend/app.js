const express=require('express')
const app=express();
const bodyParser=require('body-parser')


//Routes
const userRoutes=require('./api/routes/user')

app.use('/user',userRoutes)

module.exports=app;
