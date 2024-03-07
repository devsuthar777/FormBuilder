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
    fieldIndex:{
        required:true,
        type:String
    },
    options:
    [{
        type:String
    }]
})

module.exports = mongoose.model("formField",formFiledSchema);