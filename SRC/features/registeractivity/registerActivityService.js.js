import axios from "axios";

const registerActivityServices=async(userData)=>{
    const response=await axios.post("https://app.eventmatches.com/administrator/Api/registerActivity",userData,{
        headers: {
            "Content-Type": "multipart/form-data"
        },
      })
    // console.log("userdata==",userData);
    if(response){
        // console.log("verify email response",response?.data);
        return response?.data;
        
    }
}


export const registerActivityServicesService={
    registerActivityServices
}