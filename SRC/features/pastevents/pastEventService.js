import axios from "axios";

const pastEentServices=async(userData)=>{
    const response=await axios.post("https://app.eventmatches.com/administrator/Api/pastEvents",userData,{
        headers: {
            "Content-Type": "multipart/form-data"
        },
      })
    // console.log("userdata==",userData);
    if(response){
        console.log("pastevent data response",response?.data);
        return response.data;
        
    }
}


export const pastEventsService={
    pastEentServices
}