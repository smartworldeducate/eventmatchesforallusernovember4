import axios from "axios";

const regiterServices=async(userData)=>{
  const response=await axios.post("https://dev-app.eventmatches.com/administrator/Api/register",userData,{
    headers: {
        "Content-Type": "multipart/form-data"
    },
  })
  if(response){
      console.log("register user response",response?.data);
      return response?.data;
      
  }
}


export const registerService={
    regiterServices
}