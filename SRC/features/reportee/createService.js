import axios from "axios";

const createReportee=async(userData)=>{
    const response=await axios.post("https://b2training.beaconhouse.net/beams_ci/index.php/api/getReportee",userData,{
        headers: {
          api_key: 'X5Ne0km78x2Q1ykny9FfcIK',
          api_secret:'Q1X5NeknkyV5v6VkT78y9F',
        },
      },
    // console.log(userData)
)
    if(response.data){
      //  console.log("rreportee data",response.data)
        return response.data
        
    }
}


export const createService={
    createReportee
}