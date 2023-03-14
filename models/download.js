const mongoose = require("mongoose");

const downloadSchema = new mongoose.Schema({
   
    download:{
        type:String,
        required:true,
     
    }
    
});

const Download = mongoose.model('Download',downloadSchema);
module.exports = Download;