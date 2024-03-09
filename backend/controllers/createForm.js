
const {createField} = require('../controllers/createField');
const formField= require('../models/formFields');
const formTemplate = require('../models/formTemplate')
exports.createForm = async (req,res) => {

        try
        {
            const {title,description,publisherName,AllFieldsJson} = req.body;
            console.log(req.body);
            if(!(title && description && publisherName))
            {
                return res.status(400).json({
                        success:false,
                        message:'Please fill all the details'
                     })
            }
            else if(!AllFieldsJson)
            {
                return res.status(400).json({
                    success:false,
                    message:'Form with no questions not accecptalbe'
                 })   
            }
            
            let AllResponseId = await  createField(AllFieldsJson);
               
            let formFields = AllResponseId;
            console.log("save form",{title,description,publisherName,formFields});
            const currForm = new formTemplate({title,description,publisherName,formFields})
            const responseForm = await currForm.save();
            console.log(responseForm);
           

            if(responseForm)
            {
                return res.status(200).json({
                    success:true,
                    message:'Form created successfully'
                })
            }
            else
            {
                return res.status(500).json({
                    success:true,
                    message:'Unable to create form! please try again.'
                }) 
            }

        }

        catch(error)
        {
            console.log("Error while createing form:",error);
            return res.status(500).json({
                success:false,
                message:'Something went wrong!'
             })
        }
        
} 