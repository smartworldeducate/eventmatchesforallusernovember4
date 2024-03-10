import axios from "axios";

const eventListServices=async(userData)=>{
    const response=await axios.post("https://dev-app.eventmatches.com/administrator/Api/eventList",userData,{
        headers: {
            "Content-Type": "multipart/form-data"
        },
      })
    // console.log("userdata==",userData);
    if(response){
        // console.log("allevents data response",response?.data);
        return response?.data;
        
    }
}


export const alleventService={
    eventListServices
}