import axios from "axios";
const url = "http://localhost:8000/api/transactions/";

let getAllUserTransactions = async (userID) => {
  let resp = await axios.get(url + "user/" + userID);
  return resp.data;
};

export default { getAllUserTransactions };
