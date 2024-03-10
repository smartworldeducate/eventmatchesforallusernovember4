import axios from "axios";

const speakerDetailServices=async(userData)=>{
    const response=await axios.post("https://dev-app.eventmatches.com/administrator/Api/speakerDetail",userData,{
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


export const speakerDetailsService={
    speakerDetailServices
}