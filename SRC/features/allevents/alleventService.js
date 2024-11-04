import axios from "axios";
import { APIHEADER } from "../../constants/const";
const eventListServices=async(userData)=>{
    const response=await axios.post("https://app.eventmatches.com/administrator/Api/eventList",userData,{
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


export const alleventService={
    eventListServices
}