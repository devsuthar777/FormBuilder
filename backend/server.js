// step1 create a folder
// step2 move into that folder
//step3 npm init -y
//step4 open folder using VScode
//step5 npm i express
//step6 create server.js

const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
//const bodyParser = require('body-parser');


require('dotenv').config();
const PORT = process.env.PORT || 4000;
//importing routes
const formRoutes = require('./routes/formRoutes');
app.use(express.json());
app.use(cors());
app.use(cookieParser())

//mount  the formsRoute route
app.use("/api/v1",formRoutes);



app.listen(PORT, () =>{
    console.log("server started successfully at "+PORT);
})


//connect to database
const dbConnect = require('./config/database');
dbConnect();

app.get('/',(req,res) => {
    return res.json({
        success:true,
        message:'Your server is up and running..'
    })
});


