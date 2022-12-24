import axios from "axios";
const url = "http://localhost:8000/api/users/";

let loginRequest = async (userData) => {
  let resp = await axios.post(url + "login", userData);
  return resp.data;
};

let registrationRequest = async (newUserData) => {
  let resp = await axios.post(url, newUserData);
  return resp.data;
};

let forgotPasswordRequest = async (userData) => {
  let resp = await axios.post(url + "forgotpasswordReset", userData);
  return resp.data;
};

let resetPassword = async (userID, passwordData) => {
  let resp = await axios.put(url + "newpasswordsetup/" + userID, passwordData);
  return resp.data;
};

let updateUser = async (userID, userNewData) => {
  console.log(userID);
  console.log(userNewData);

  let resp = await axios.put(url + userID, userNewData);
  return resp.data;
};

export default {
  updateUser,
  loginRequest,
  registrationRequest,
  forgotPasswordRequest,
  resetPassword,
};
