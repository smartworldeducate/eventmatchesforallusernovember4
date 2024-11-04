import axios from "axios";
import { APIHEADER } from "../../constants/const";
const adminListServices=async(userData)=>{
    const response=await axios.get("https://app.eventmatches.com/administrator/Api/adminList",userData,{
        headers: {
            api_key: APIHEADER.api_key,
            api_secret:APIHEADER.api_secret,
            "Content-Type": "multipart/form-data"
        },
      })
    if(response){
        return response?.data;
        
    }
}


export const adminService={
    adminListServices
}