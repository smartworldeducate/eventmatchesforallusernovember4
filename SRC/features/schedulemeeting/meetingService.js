import axios from "axios";

const meetingServices=async(userData)=>{
    const response=await axios.post("https://app.eventmatches.com/administrator/Api//scheduleReport",userData,{
        headers: {
            "Content-Type": "multipart/form-data"
        },
      })
    // console.log("userdata==",userData);
    if(response){
        // console.log("attendee  data response",response?.data?.response?.detail[2]);
        return response.data;
        
    }
}


export const meetingService={
    meetingServices
}