
const formTemplate = require('../models/formTemplate');
exports.viewFormTemplate = async (req,res) => {
    
    const {formId} = req.body;
    console.log(req.body);
    if(!formId)
    {
        return res.status(400).json({
            success:false,
            message:'Please refresh and try again!'
        })
    }
    
    try
    {

        const formResponse = await formTemplate.findById(formId).populate("formFields").exec();;
        //const formResponse = await formTemplate.findById(formId);
        console.log(formResponse);
    if(formResponse){
        return res.status(200).json({
            success:true,
            message:"Forms found",
            data:formResponse
        })
    }
    else
    {
        return res.status(404).json({
            success:true,
            message:"Form does't exists",
            data:formResponse
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