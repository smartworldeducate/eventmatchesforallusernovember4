import axios from "axios";

const verifyEmailServices=async(userData)=>{
    const response=await axios.post("https://app.eventmatches.com/administrator/Api/verify",userData,{
        headers: {
            "Content-Type": "multipart/form-data"
        },
      })
    console.log("userdata==",userData);
    if(response){
        console.log("verify email response",response?.data);
        return response?.data;
        
    }
}


export const emailService={
    verifyEmailServices
}