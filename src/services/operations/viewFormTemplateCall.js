import {toast} from 'react-hot-toast'
const {apiConnector} = require('../apiConnector');
const {RetriveFroms} = require('../apis');

export const viewFormTemplateCall =  async (formData) => {
    try
    {
        //setLoader(true);
        console.log("formData:",formData);
        const result = await apiConnector("GET",RetriveFroms.VIEW_FORM_TEMPLATE,{"doctor":"sdfdsf"});
        
        
        if(result.data.success)
        {
            //alert("Request recieved! Thank you");
            //toast.success(result.data.message);
           // setFormTemplates(result.data.data);

        }
        else
        {
              
            toast.error(result.data.message);
          
        }
    }
    catch(error)
    {
        console.log(error);
        
        toast.error('Something went wrong! Please try again');
    }

    //setLoader(false);
}