
const formTemplate = require('../models/formTemplate');
exports.viewAllForms = async (req,res) => {
    console.log(req.body);
    try
    {

        const allForms = await formTemplate.find({});
        console.log(allForms);
    if(allForms){
        return res.status(200).json({
            success:true,
            message:"Forms found",
            data:allForms
        })
    }

    }
    catch(error)
    {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:'Something went wrong! Please try again'
        })
    }
    

}