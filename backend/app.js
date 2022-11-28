const express = require('express')
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser')
const mongoose=require('mongoose')


//Routes import
const userRoutes = require('./api/routes/user');

//Mongodb connection
const db='mongodb://localhost:27017/CredAdda';
mongoose.connect(db).then(() => {
    console.log('connection successful');
}).catch((err) => console.log('Error'))
mongoose.Promise = global.Promise;

//Body Parser
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Routes used
app.use('/user', userRoutes)

module.exports = app;
