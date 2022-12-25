import axios from "axios";
const url = "http://localhost:8000/api/transactions/";

let getAllUserTransactions = async (userID) => {
  let resp = await axios.get(url + "user/" + userID);
  return resp.data;
};
let getUserTransactionsByType = async (userAsk) => {
   let resp = await axios.post(url + "type/",userAsk);
   return resp.data;
 };
 let addNewTransaction = async (userAsk) => {
   let resp = await axios.post(url,userAsk);
   return resp.data;
 };
export default { getAllUserTransactions,getUserTransactionsByType ,addNewTransaction};
