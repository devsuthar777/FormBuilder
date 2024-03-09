import {toast} from 'react-hot-toast'
const {apiConnector} = require('../apiConnector');
const {RetriveFroms} = require('../apis');

export const retriveFormTemplates =  async (setLoader,setFormTemplates) => {
    try
    {
        setLoader(true);
        const result = await apiConnector("GET",RetriveFroms.VIEW_ALL_FORMS,{devendr:"sdfsdf"});
        console.log(result);
        if(result.data.success)
        {
            //alert("Request recieved! Thank you");
            //toast.success(result.data.message);
            setFormTemplates(result.data.data);

        }
        else
        {
              
            toast.error(result.data.message);
            return [];
        }
    }
    catch(error)
    {
        console.log(error);
        
        toast.error('Something went wrong! Please try again');
    }

    setLoader(false);
}


export const viewFormTemplateCall =  async (formId,setLoader,setFormData,setSubData,viewDataFlag,setViewData) => {
    try
    {
        //setLoader(true);
        console.log("formData:",formId);
        const result = await apiConnector("POST",RetriveFroms.VIEW_FORM_TEMPLATE,{formId:formId});
        
        
        if(result.data.success)
        {
            //alert("Request recieved! Thank you");
            //toast.success(result.data.message);
            setFormData(result.data.data);

            let arrayValues = [];
            let arrayfinal = result.data.data.formFields.length;
            console.log("ssdfdf",arrayfinal);
            const newArray = new Array(arrayfinal).fill('');
            setSubData(newArray);
            if(viewDataFlag) viewFormTemplateData(formId,setViewData);

        }
        else
        {
              
            toast.error(result.data.message);
            setFormData({});
          
        }
    }
    catch(error)
    {
        console.log(error);
        
        toast.error('Something went wrong! Please try again');
        setFormData({});
    }
    setLoader(false);
  
}


const viewFormTemplateData =  async (formId,setViewData) => {
    try
    {
        //setLoader(true);
        console.log("formViewData:",{formId:`${formId}`});
        const result = await apiConnector("POST",RetriveFroms.VIEW_FORMDATA,{formId:`${formId}`});
        
        
        if(result.data.success)
        {
            //alert("Request recieved! Thank you");
            //toast.success(result.data.message);
            setViewData(result.data.data.formData);

           
            

        }
        else
        {
              
            toast.error(result.data.message);
            setViewData([]);
          
        }
    }
    catch(error)
    {
        console.log(error);
        
        toast.error('Something went wrong! Please try again');
        setViewData([]);
    }
    //setLoader(false);
  
}