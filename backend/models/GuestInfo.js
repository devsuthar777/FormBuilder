const mongoose = require('mongoose');

const GuestInfo = new mongoose.Schema({
     guestVisitDate:{
        type: String,
        trim:true
     },
})

module.exports = mongoose.model("guestInfo",GuestInfo);