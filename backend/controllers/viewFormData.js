
const formTemplate = require('../models/formTemplate');



exports.viewFormData = async (req,res) =>{
    console.log("meranam",req.body);
    try
    {
        console.log(req.body);
        const {formId} = req.body;

        if(!formId){
            return res.status(400).json({
                success:false,
                message:"Invalid Form Id"
            })
        }

        const responseData = await formTemplate.findById(formId).populate("formData").exec();
        
        if(!responseData){
            return res.status(404).json({
                success:false,
                messaeg:'No such Form Found'
            })
        }

        return res.status(200).json(
            {
                success:true,
                message:"Data Found",
                data:responseData
            })

    }
    catch(error)
    {
        console.log("Error while fetching form data:",error);
        return res.status(500).json({
            success:false,
            message:'Something went wrong! Please refresh the page'
        })
    }

}