import {toast} from 'react-hot-toast'
const {apiConnector} = require('../apiConnector');
const {submitForm} = require('../apis');

export const submitFormTemplate = async (formTemplateData,setLoader) =>{

    try
    {
        const result = await apiConnector("POST",submitForm.CREATE_FORM,formTemplateData);
        console.log(result);
        if(result.data.success)
        {
             toast.success(result.data.message);
        }
        else
        {
            toast.error(result.data.message);   
        }
    }
    catch(error)
    {
        console.log(error);
        toast.success("Something went wrong!");
    }


    setLoader(false);
}