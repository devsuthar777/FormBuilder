import toast from "react-hot-toast"

import { authUser } from "../apis";
import { apiConnector } from "../apiConnector";
import { setToken } from "../../slices/authSlice";
import { setUser } from "../../slices/profileSlice";
export const login = async (data,setLoader,dispatch,navigate) =>
{  
     setLoader(true);
    try
    {
     
          const result = await apiConnector("POST",authUser.LOGIN_USER,data);
          console.log(result);
        
           if(result.data.success)
          {
             toast.success(result.data.message);
             console.log(result.data.success);
             localStorage.setItem("token",result.data.token);
             console.log(result.data.userData);
             dispatch(setUser(result.data.userData));
             dispatch(setToken(result.data.token));
             navigate('/');
          }
          else
          {
             toast.error(result.data.message); 
          }
        
    }
    catch(error)
    {   

          if(error?.response?.data?.message) toast.error(error?.response?.data?.message);
          else toast.error("Can't Login! Please try again");
    }
    setLoader(false);
}