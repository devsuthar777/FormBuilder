const mongoose = require('mongoose');
const formField = require('./formFields')
const formSchema =  new mongoose.Schema({
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
        required:true,
        default:Date.now()
    },
    publisherName:{
        type:String,
        required:true,
    },
    formFiels:
    [{
        type:mongoose.Schema.Types.ObjectId,
        ref:"formField"
    }]
})

module.exports = mongoose.model("form",formSchema);