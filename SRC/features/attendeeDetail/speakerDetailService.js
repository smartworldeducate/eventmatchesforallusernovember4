import axios from "axios";
import { APIHEADER } from "../../constants/const";
const speakerDetailServices=async(userData)=>{
    const response=await axios.post("https://app.eventmatches.com/administrator/Api/speakerDetail",userData,{
        headers: {
            api_key: APIHEADER.api_key,
            api_secret:APIHEADER.api_secret,
            "Content-Type": "multipart/form-data"
        },
      })
    if(response){
        return response.data;
        
    }
}


export const speakerDetailsService={
    speakerDetailServices
}