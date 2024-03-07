import {toast} from 'react-hot-toast'
const {apiConnector} = require('../apiConnector');
const {recruiterInfo} = require('../apis');


export const createRecruiterInfo = async (bodyData,visitorToken) => {

    try
    {
        
        const result = await apiConnector("POST",recruiterInfo.RECRUITER_INFO,bodyData,{"Authorisation":visitorToken});
        console.log(result);
        if(result.data.success)
        {
            //alert("Request recieved! Thank you");
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
        
        toast.error('Something went wrong! Please try again');
    }

}