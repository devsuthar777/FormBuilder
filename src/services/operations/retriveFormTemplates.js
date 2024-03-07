import {toast} from 'react-hot-toast'
const {apiConnector} = require('../apiConnector');
const {RetriveFroms} = require('../apis');

export const retriveFormTemplates =  async (bodyData) => {
    try
    {
        
        const result = await apiConnector("GET",RetriveFroms.viewAllForms,{});
        console.log(result);
        if(result.data.success)
        {
            //alert("Request recieved! Thank you");
            //toast.success(result.data.message);
            return result.data.data;

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
}