import toast from "react-hot-toast";
import { setUser } from "../../slices/profileSlice";
import { setToken } from "../../slices/authSlice";


export const  logout = (dispatch,navigate) => {

    navigate('/');
    localStorage.removeItem("token");
    dispatch(setToken(null));
    dispatch(setUser(null));
    toast.success("Logged out successfully!")
    

}