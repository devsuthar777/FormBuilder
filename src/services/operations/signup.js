import toast from "react-hot-toast"

import { authUser } from "../apis";
import { apiConnector } from "../apiConnector";
export const signup = async (data,setLoader,navigate) =>
{  
     setLoader(true);
    try
    {
     
         const result = await apiConnector("POST",authUser.SIGNUP_USER,data);
          console.log(result);
        
           if(result.data.success)
          {
             toast.success(result.data.message +" & please login");
             navigate('/auth/login');
             console.log(result.data.success);
          }
          else
          {
             toast.error(result.data.message); 
          }
        
    }
    catch(error)
    {   
          if(error?.response?.data?.message) toast.error(error?.response?.data?.message);
          else toast.error("Can't create user! Please try again");
    }
    setLoader(false);
}