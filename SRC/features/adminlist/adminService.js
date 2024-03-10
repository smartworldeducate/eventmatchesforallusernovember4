import axios from "axios";

const adminListServices=async(userData)=>{
    const response=await axios.get("https://dev-app.eventmatches.com/administrator/Api/adminList",userData,{
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


export const adminService={
    adminListServices
}