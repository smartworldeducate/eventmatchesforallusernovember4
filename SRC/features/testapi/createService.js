import axios from "axios";
const testService=async(userData)=>{
    const response=await axios.post("https://ws.beaconhouse.net/beaconhouse/index.php/apiMisc/get_booksellers",userData,{
        headers: {
          api_key: 'X5Ne0km7852Q1ykny9FfcIK5y9kVV5v6',
          api_secret:'Q1X5NeknkyV5v6Vkm78y9FfcI0K5y952',
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
    testService
}