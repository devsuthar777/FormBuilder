const mongoose = require('mongoose');

require('dotenv').config()

const dbConnect  = () => {
    mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log("DB connected successfully"))
    .catch((error) =>{
        console.log("Issue while connecting to DB");
        console.log(error.message);
        process.exit(1);
    });
}

module.exports = dbConnect;