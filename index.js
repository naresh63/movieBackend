 // package by npm
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// controllers
const movieRouter = require('./controllers/movies');

// mongoose conn.
mongoose.connect("mongodb://localhost:27017/batch_5_1") // i am creating batch_5_1 db - this function automatic create batch_5 db in mongodb
.then(()=>{
    console.log("mongodb batch_5_1 connected")
})
.catch((err)=>{
    console.log(err)
})
 
 // express obj
 const app = express();
 // to avoid cors error
 app.use(cors());
 // middleware
 app.use(express.json());
 // routers
 app.use('movies',movieRouter);

 app.listen(8000);