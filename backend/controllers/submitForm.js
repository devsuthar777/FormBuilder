const formData = require('../models/formData');
const formTemplate = require('../models/formTemplate');
exports.submitForm = async (req,res) =>
{
        try
        {
            const {formId,formDataArray} = req.body;
           console.log("Request body:",{formId,formDataArray});
           if(!(formId && formData)) 
           {
                return res.status(400).json({
                    success:false,
                    message:'Something wrong with Request'
                })
           }

           let formDataString = JSON.stringify(formDataArray);
           console.log("formDataString :",formDataString);

           const resFormData =await formData.create({formId,formValue:`${formDataString}`});
           console.log("resFormData :",resFormData);

           const updatedForm =await formTemplate.findByIdAndUpdate(formId,{$push:{formData:resFormData._id}},{new:true});

           if(updatedForm)
           {
            return res.status(200).json({
                success:true,
                message:"Successfully Submited!",
                data:updatedForm
            })
           }
           else
           {
            return res.status(404).json({
                success:false,
                message:"No Such Form Present!"
            })
           }
            }
        catch(error)
        {
            console.log("Error while submiting form:",error);
            return res.status(500).json({
                success:false,
                message:"Something went wrong! Please try again"
            })
        }
                      
}