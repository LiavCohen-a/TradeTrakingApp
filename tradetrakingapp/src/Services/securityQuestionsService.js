import axios from "axios";
const url = "http://localhost:8000/api/securityquestions/";

// Authentication Requests

let getAllQuestions = async () => {
  let resp = await axios.get(url);
  return resp.data;
};
let getQuestion = async (id) => {
  let resp = await axios.get(url+id);
  return resp.data;
};
export default { getAllQuestions,getQuestion };
