
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.auth = (req,res,next) => {

    try
    {
                // extract JWT token
                const token = req.body.token;
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
                        message: "Invalid token!"
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