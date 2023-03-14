const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    type:{
        type:String,
        required:true,
        trim:true
    },
    desc:{
        type:String,
        required:true,
        trim:true
    },
    gitLink:{
        type:String,
      
        trim:true
    },
    googlePlayLink:{
        type:String,
  
        trim:true
    },
    images:[{
        type:String,
        required:true,
     
    }],
    tags:[{
        type:String,
        required:true,
    }],
    mainImg:{
        type:String,
   
        trim:true
    },
});

const Project = mongoose.model('Project',projectSchema);
module.exports = Project;