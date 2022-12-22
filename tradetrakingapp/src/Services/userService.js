import axios from 'axios';
const url = "http://localhost:8000/api/users/"

// Authentication Requests

let loginRequest =async (userData) => {
   let resp = await axios.post(url+"login",userData);
   if(resp.data.includes("successfully")){
      console.log(resp.data)
    }
   return (resp.data)
}

let registrationRequest =async (newUserData) => {
   let resp = await axios.post(url,newUserData);
   return (resp.data)
}

let forgotPasswordRequest =async (userData) => {
   let resp = await axios.post(url+'forgotpasswordReset',userData);
   return (resp.data)
}


export default {loginRequest,registrationRequest,forgotPasswordRequest};
