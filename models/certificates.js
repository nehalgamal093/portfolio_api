const mongoose = require("mongoose");

const certificateSchema = new mongoose.Schema({
   
    certImages:{
        type:String,
        required:true,
     
    }
    
});

const Certificate = mongoose.model('Certificate',certificateSchema);
module.exports = Certificate;