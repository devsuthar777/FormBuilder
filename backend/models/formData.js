const mongoose = require('mongoose');
const form = require('./forms');

const formDataScheama = new mongoose.Schema({
    formId:{
        required:true,
        type:mongoose.Schema.Types.ObjectId,
        ref:"form"
    },
    formValue:
    {
        required:true,
        type:String
    }
})