
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.auth = (req,res,next) => {

    try
    {
                // extract JWT token
                console.log("body",req.body.token);
                console.log("cookies",req.cookies.token);
                console.log("header",req.header("Authorisation").replace('Bearer ',""));
                const token = req.body.token || req.cookies.token || req.header("Authorisation").replace('Bearer ',"");
                if(!token)
                {
                    return res.status(401).json({
                        success:false,
                        message: "Token missing!"
                    })
                }

                //verify token
                try
                {   
                        const decode = jwt.verify(token,process.env.JWT_SECRET);
                        console.log(decode);
                        req.user = decode;

                }
                catch(error)
                {
                    return res.status(401).json({
                        success:false,
                        message: "You aren't valid user!"
                    })
                }

                next();
    }
    catch(error)
    {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Something went wrong, While verifying the token"
        })

    }

}