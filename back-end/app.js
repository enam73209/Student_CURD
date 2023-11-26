const express = require('express');
const app = new express();
const router = require('./src/routes/api');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.json());

//Security MiddleWare
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const hpp = require('hpp');
const cors = require('cors');

// Database Middleware

const mongoose = require('mongoose');

//Secuirty MiddleWare Implement
app.use(helmet());
app.use(mongoSanitize());
app.use(hpp());
app.use(cors());
const limiter =rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 100,
    standardHeaders: 'draft-7',
    legacyHeaders: false,
});
app.use(limiter);

//Database Connection
const url = 'mongodb://0.0.0.0:27017/Student_CURD';
let options = {user:'',pass:'',autoIndex:true}
mongoose.set('strictQuery', false);
mongoose.connect(url,options).then((res)=>{
    console.log("Successfully connected to Database");
}).catch((err)=>{
    console.log(err)
})

// Api End Point
app.use("/api/v1",router);


module.exports = app;