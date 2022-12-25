import axios from "axios";
const url = "http://localhost:8000/api/securityquestions/";

// Authentication Requests

let getAllQuestions = async () => {
  console.log("res")
  let resp = await axios.get(url);
  console.log(resp)

  // return resp.data;
};
let getQuestion = async (id) => {
  let resp = await axios.get(url+id);
  console.log(resp)
  return resp.data;
};
export default { getAllQuestions,getQuestion };
