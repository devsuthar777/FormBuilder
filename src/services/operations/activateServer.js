import toast from "react-hot-toast";
import { authUser } from "../apis";
import { apiConnector } from "../apiConnector";

export const activateServer =  async(dummyData) => {
    

    if(localStorage.getItem("guestVisitDate")) return;
    
    try
    {
          const dummyData ={"guestVisitDate" : calcuateDateAndTime()} 
          console.log(authUser.ACTIVAE_SERVER);
          const result = await apiConnector("POST",authUser.ACTIVAE_SERVER,dummyData);
          console.log(result);
          
           if(result.data.success)
          {
            localStorage.setItem("guestVisitDate",result.data.data.guestVisitDate);
          }
          else
          {
            
          }
     

    }
    catch(error)
    {
        console.log(error);
    }
}


const  calcuateDateAndTime = () => {

let currentDate = new Date();

let year = currentDate.getFullYear();
let month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
let day = currentDate.getDate().toString().padStart(2, '0');

let hours = currentDate.getHours().toString().padStart(2, '0');
let minutes = currentDate.getMinutes().toString().padStart(2, '0');
let seconds = currentDate.getSeconds().toString().padStart(2, '0');

let formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
console.log(formattedDate);

return formattedDate;
}