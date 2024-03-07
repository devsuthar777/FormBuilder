const mongoose = require('mongoose');
const formField = require('../models/formFields');
const formData =  require('./formData');
const formTemplateSchema =  new mongoose.Schema({
    title:{
        required:true,
        type:String
    },
    description:{
        required:true,
        type:String
    },
    publishTime:{
        type: Date,
        default:Date.now()
    },
    publisherName:{
        type:String,
        required:true,
    },
    formFields:
    [{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref: "formField"

        
    }],
    formData:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: "formData",
        default:null

    }]

    
});

module.exports = mongoose.model("formTemplate",formTemplateSchema);