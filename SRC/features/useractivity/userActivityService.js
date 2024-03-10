import axios from "axios";

const userActivityServices=async(userData)=>{
    const response=await axios.post("https://dev-app.eventmatches.com/administrator/Api/activityUsers",userData,{
        headers: {
            "Content-Type": "multipart/form-data"
        },
      })
    // console.log("userdata==",userData);
    if(response){
        console.log("activity user data response",response?.data);
        return response?.data;
        
    }
}


export const useractivityService={
    userActivityServices
}