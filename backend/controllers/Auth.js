const bcrypt = require('bcrypt');
const User = require('../models/User');
const jsonwebtoken = require('jsonwebtoken');
const { options } = require('../routes/formRoutes');

require('dotenv').config();
//signup route handler
exports.signup = async(req,res) => {
    try
    {
        const {name,email,password} = req.body;

        const existingUser = await User.findOne({email});

        if(existingUser)
        {
            return res.status(400).json({
                success:false,
                message:'User already Exists'
            })
        }

        let hashedPassword;

        try
        {
            hashedPassword = await bcrypt.hash(password,10);   
        }
        catch(error)
        {
            return res.status(500).json({
                success:false,
                message:"Please try with different password!"
            })
        }

        //create user

        const user = await User.create({
            name,email,password:hashedPassword
        })

        return res.status(200).json({
            success:true,
            message: "User created Successfully"
        })
    }
    catch(error)
    {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"User can't be registered, Please try again"
        })
    }
}

exports.login = async (req,res) => {

    try
    {
        const {email,password} = req.body;
        console.log(req.body);
        if(!(email && password)) return res.status(400).json({
            success:false,
            message: "All credentials are Required!"
        })

        let userData = await User.findOne({email});

        if(!userData) return res.status(404).json({
            success:false,
            message: "User doesn't exist against Email!"
        })

        console.log("userData", userData);

       
        console.log(userData.password);

        console.log(await bcrypt.compare(password,userData.password));
        if(!(await bcrypt.compare(password,userData.password))) return res.status(403).json({
            success:false,
            message:"Invalid Password!"
        })


         const payload = {
            email:userData.email,
            id:userData.id,
            name:userData.name
         }

         let token = jsonwebtoken.sign(payload,process.env.JWT_SECRET,{
            expiresIn: "1h"
         })

         const options ={
            //expires: new Date(Date.now() + 3*24*60*60*1000),
            expires: new Date(Date.now() + 5*60*1000),
            httpOnly:true,
         }

         userData = userData.toObject();

         userData.password = undefined;
         userData.token = token;

         res.cookie("token",token,options).status(200).json({
            success:true,
            message:"Login Successful!",
            userData,
            token
 
         })
    }
    catch(error)
    {
        console.log("Error",error);
        res.status(500).json({
            success:false,
            message:'Something went wrong! Please try again'
        })

    }

}