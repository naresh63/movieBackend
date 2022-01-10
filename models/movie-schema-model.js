const mongoose = require('mongoose');
// schema for movies
const movieSchema = new mongoose.Schema({
    name:{type:String,required:true},
    genre:{type:String,required:true}
});
// create model from schema
const movieModel= new mongoose.model('movies',movieSchema); // movies is collection name, when i mentioned here it auto created in batch_5 as collection name
module.exports= movieModel;