const express=require('express')
const app=express();
const morgan=require('morgan');
const bodyParser=require('body-parser')


//Routes import
const userRoutes=require('./api/routes/user');


//Body Parser
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//Routes used
app.use('/user',userRoutes)

module.exports=app;
