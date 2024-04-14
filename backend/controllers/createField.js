
const formField = require('../models/formFields');

exports.createField = async (AllFieldsJson) =>
{    
    
    let AllResponseId = [];
     for (element of AllFieldsJson)
     {
        
        const {fieldIndex,fieldTitle,fieldType,options} = element;

        console.log("Filed Creation data:",fieldIndex,fieldTitle,fieldType,options);

        const responseData = await formField.create({fieldTitle,fieldType,fieldIndex,options});        
        AllResponseId.push(responseData._id);
     }

     console.log("Response filed Created:",AllResponseId);

     return AllResponseId;
        
}