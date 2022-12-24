import axios from "axios";
const url = "http://localhost:8000/api/positions/";

let getAllUserPositions = async (userID) => {
  let resp = await axios.get(url + userID);
  return resp.data;
};

export default { getAllUserPositions };
