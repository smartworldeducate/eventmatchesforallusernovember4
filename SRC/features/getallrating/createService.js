import axios from "axios";
const getRatingService=async()=>{
    const response=await axios.get("https://b2training.beaconhouse.net/beams_ci/index.php/api/getRating",{
        headers: {
          api_key: 'X5Ne0km78x2Q1ykny9FfcIK',
          api_secret:'Q1X5NeknkyV5v6VkT78y9F',
        },
      },
    // console.log("feed servise",userData)
)
    if(response){
      //  console.log("feed responce data",response)
        return response?.data
        
    }
}


export const createService={
    getRatingService
}