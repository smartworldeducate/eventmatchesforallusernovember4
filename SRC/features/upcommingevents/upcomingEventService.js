import axios from "axios";

const futureEentServices=async(userData)=>{
    const response=await axios.post("https://app.eventmatches.com/administrator/Api/futureEvents",userData,{
        headers: {
            "Content-Type": "multipart/form-data"
        },
      })
    // console.log("userdata==",userData);
    if(response){
        // console.log("activity data response",response?.data);
        return response.data;
        
    }
}


export const futureEventsService={
    futureEentServices
}