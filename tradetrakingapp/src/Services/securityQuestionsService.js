import axios from "axios";
const url = "http://localhost:8000/api/securityquestions/";

// Authentication Requests

let getAllQuestions = async () => {
  let resp = await axios.get(url);
  return resp.data;
};

export default { getAllQuestions };
