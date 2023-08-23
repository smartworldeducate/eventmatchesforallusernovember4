import axios from "axios";
const userList=async(userData)=>{
    const response=await axios.get("https://b2training.beaconhouse.net/tag_scanner/api/getuserlist",{
        headers: {
          api_key: 'X5Ne0km78x2Q1ykny9FfcIK',
          api_secret:'Q1X5NeknkyV5v6VkT78y9F',
        },
      },
     console.log("user admin data")
)
    if(response.data){
        console.log("user admin data",response.data)
        return response.data.data
        
    }
}

export const userService={
    userList
}