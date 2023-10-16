import axios from "axios";

const historySalary=async(userData)=>{
    const response=await axios.post("https://b2training.beaconhouse.net/beams_ci/index.php/api/salaryEmpHistory",userData,{
        headers: {
          api_key: 'X5Ne0km78x2Q1ykny9FfcIK',
          api_secret:'Q1X5NeknkyV5v6VkT78y9F',
        },
      },
    // console.log(userData)
)
    if(response.data){
      //  console.log("history employee salary from service",response.data)
        return response?.data
        
    }
}


export const createService={
    historySalary
}