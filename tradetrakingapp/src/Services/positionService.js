import axios from "axios";
const url = "http://localhost:8000/api/positions/";

let getAllUserPositions = async (userID) => {
   let resp = await axios.get(url + userID);
   return resp.data;
 };
let addPosition = async (positionData) => {
   let resp = await axios.post(url ,positionData);
   return resp.data;
 };
 let GetPositionByID = async (positionID) => {
   let resp = await axios.get(url+'/position/'+positionID );
   return resp.data;
 };
  
 let closePosition = async (positionID,positionData) => {
   let resp = await axios.put(url+'close/'+positionID,positionData );
   return resp.data;
 };
  
export default { getAllUserPositions,addPosition ,GetPositionByID,closePosition};
