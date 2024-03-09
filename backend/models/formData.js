const mongoose = require('mongoose');
const formTemplate = require('./formTemplate');

const formDataScheama = new mongoose.Schema({
    formId:{
        required:true,
        type:mongoose.Schema.Types.ObjectId,
        ref:"formTemplate"
    },
    formValue:
    {
        required:true,
        type:mongoose.Schema.Types.Array
    }
})

module.exports = mongoose.model("formData",formDataScheama);