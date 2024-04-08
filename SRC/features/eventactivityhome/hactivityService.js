import axios from "axios";

const activityServices=async(userData)=>{
    const response=await axios.post("https://app.eventmatches.com/administrator/Api/eventActivities",userData,{
        headers: {
            "Content-Type": "multipart/form-data"
        },
      })
    // console.log("userdata==",userData);
    if(response){
        // console.log("activity data response",response?.data);
        return {
            responseData: response.data,
            userData: userData
        };
        
    }
}


export const activityHomeService={
    activityServices
}