const mongoose = require('mongoose');

const formFiledSchema = new mongoose.Schema({
    fieldTitle:
    {
        required:true,
        type:String
    },
    fieldType:
    {
        required:true,
        type:String
    },
    index:{
        required:true,
        type:Number
    },
    options:
    {
        type:String
    }
})

module.exports = mongoose.model("formField",formFiledSchema);