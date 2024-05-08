const bcrypt = require('bcrypt');
const User = require('../models/User');
const jsonwebtoken = require('jsonwebtoken');
const { options } = require('../routes/formRoutes');
const { jwtDecode } = require('jwt-decode');

require('dotenv').config();
//signup route handler
exports.signup = async(req,res) => {
    try
    {
        const {name,email,password} = req.body;
        console.log({name,email,password});
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

exports.contWithGoogle = async(req,res) => {
    try
    {
            const token = req.header("Authorization").replace('Bearer ',"");
            if(!token) return res.status(401).json({
                success:false,
                message:"Token missing! Can't continue with google"
            })
            var decodedToken = null
            try
            {
                decodedToken = jwtDecode(token); 
                console.log("DecodedToken:",decodedToken);
            }
            catch(error)
            {
                return res.status(401).json({
                    success:false,
                    message:"Invalid token"
                })
            }

            const email = decodedToken.email;
            var existingUser = await User.findOne({email});

            if(existingUser)
            {
                const payload = {
                    email:decodedToken.email,
                    id:existingUser.id,
                    name:existingUser.name,
                    profilePicture:decodedToken.picture,
                    
                 }
        
                 let token = jsonwebtoken.sign(payload,process.env.JWT_SECRET,{
                    expiresIn: "1h"
                 })
        
                 const options ={
                    //expires: new Date(Date.now() + 3*24*60*60*1000),
                    expires: new Date(Date.now() + 5*60*1000),
                    httpOnly:true,
                 }
        
                 existingUser = existingUser.toObject();
        
                 existingUser.password = undefined;
                 existingUser.token = token;
                 existingUser.picture = decodedToken.picture;
        
                 res.cookie("token",token,options).status(200).json({
                    success:true,
                    message:"Welcome to FormBuilder!",
                    userData:existingUser,
                    token
         
                 })
                
            }

            else
            {

                let passowrd=decodedToken.email + "#1234";
                let hashedPassword= null;
                console.log(passowrd);

                try
                {
                    hashedPassword = await bcrypt.hash(passowrd,10);   
                }
                catch(error)
                {
                    return res.status(500).json({
                        success:false,
                        message:"Please try with different password!"
                    })
                }

                //create user

                let user = await User.create({
                    name:decodedToken.name,email,password:hashedPassword
                })
                
                const payload = {
                    email:decodedToken.email,
                    id:user._id,
                    name:user.name,
                    profilePicture:decodedToken.picture,
                    
                 }
        
                 let token = jsonwebtoken.sign(payload,process.env.JWT_SECRET,{
                    expiresIn: "2h"
                 })
        
                 const options ={
                    //expires: new Date(Date.now() + 3*24*60*60*1000),
                    expires: new Date(Date.now() + 3*24*60*60*1000),
                    httpOnly:true,
                 }
        
                 user = user.toObject();
        
                 user.password = undefined;
                 user.token = token;
                 user.picture = decodedToken.picture;
        
                 res.cookie("token",token,options).status(200).json({
                    success:true,
                    message: `Welcome To FormBuilder! Default password: ${email+"#12345"}`,
                    userData:user,
                    token
         
                 })

            }

    }
    catch(error)
    {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Something went wrong!"
        })
    }
}