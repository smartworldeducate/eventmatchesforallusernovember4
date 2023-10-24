import axios from "axios";

const getAllCat=async(userData)=>{
    const response=await axios.get("https://b2training.beaconhouse.net/beams_ci/index.php/api/getalll_category",{
        headers: {
          api_key: 'X5Ne0km78x2Q1ykny9FfcIK',
          api_secret:'Q1X5NeknkyV5v6VkT78y9F',
        },
      },
     
)
    if(response.data){
        console.log("category data",response.data.data)
        return response.data
    }
}

export const catService={
    getAllCat
}