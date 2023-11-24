import axios from "axios";
const ratingService=async(userData)=>{
    const response=await axios.post("https://b2training.beaconhouse.net/beams_ci/index.php/api/rating",userData,{
        headers: {
          api_key: 'X5Ne0km78x2Q1ykny9FfcIK',
          api_secret:'Q1X5NeknkyV5v6VkT78y9F',
        },
      },
    // console.log("feed servise",userData)
)
    if(response){
      //  console.log("rating responce data",response)
        return response?.data
        
    }
}


export const createService={
    ratingService
}