const express = require('express');
const router = express.Router();
// custom model
const movieModel= require('../models/movie-schema-model');
 

 // fetch movies app - no input data send
 router.get("/",(req,res)=>{
     res.send("hello");
    // below function by mongoose search this get req in collection (batch_5 db)
   
 })
 // create movie API - need data
 router.post("/createMovie",(req,res)=>{
    let movie = req.body;
    // let create obj from model
    let movieObj= new movieModel(movie);
    movieObj.save() // mongoose
    .then(()=>{
        res.send({message:"movie created"})
    })
    .catch((err)=>{
        console.log(err)
    })
 })
 // update movie API
 router.put("/movies/:id",(req,res)=>{
     let id= req.params.id;
     let updateData = req.body;
     movieModel.updateOne({_id:id},updateData)
     .then(()=>{
         res.send({message:"movie updated"})
     })
     .catch((err)=>{
         console.log(err)
     })
 })
 // delete movie API
 router.delete("/movies/:id",(req,res)=>{
     let id = req.params.id;
     movieModel.deleteOne({_id:id})
     .then(()=>{
         res.send({message:"movie deleted successfully"})
     })
     .catch((err)=>{
         console.log(err)
     })
 })
module.exports =router;