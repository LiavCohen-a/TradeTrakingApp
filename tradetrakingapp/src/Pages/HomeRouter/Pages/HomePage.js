import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import positionService from "../../../Services/positionService";
import transactionService from "../../../Services/transactionService";

function HomePage() {
  const storageData = useSelector(state => state)
  const dispatch = useDispatch();
  const [user,setUser] = useState({})
  const [winingPositions,setWiningPositions] = useState(0)

  useEffect(() =>{
    setUser(storageData.loginUser.data)
    getData()
  },[])
  const getData =async () => {
    let resp = await positionService.getAllUserPositions(storageData.loginUser.data._id);
    dispatch({type: "POSITIONS" ,payload : resp})
    let resp2 = await transactionService.getAllUserTransactions(storageData.loginUser.data._id)
    dispatch({type: "TRANSACTIONS" ,payload : resp2})

    let result = storageData.positions.filter(x => {
      if(x.positionClosed){
        if(x.type ==="Long"){
          if(x.entryPrice < x.closePrice){
            return x;
          }
        }else{
          if(x.entryPrice > x.closePrice){
            return x;
          }
        }
        
      }
    })
    setWiningPositions(result.length)
  }
  return (
    <div className="PageContainer">
        <div className="DataContainer">
          <div className="Box">
            <div>
             <b>User Data</b><br/>
              <div>ID: {user._id}</div>
              <div>Current Margin : {user.accountCurrentMargin}$</div>
              <div><br/>
              <b>transactions</b><br/>
              Amount : {storageData.transactions.length} <br/>
              Last transaction :{storageData.transactions._id ? storageData.transactions._id : 'No transaction yet'}
            </div>
            </div>
            </div>
          <div className="Box">coin</div>
          <div className="Box">
      
        
            <div>
              <b>Pnl/Statistics</b><br/>
              <div>PNL From start point : {user.accountCurrentMargin / user.accountStartingPoint * 100}%</div>
              Wining positions : {winingPositions}
              <div>Open Positions : {storageData.positions.length}</div>
              USD PNL : {user.accountStartingPoint - user.accountCurrentMargin}<br/>

       
            </div>
          </div>
        </div>
        <div className="DataContainer Text">what is cryptoa
        </div>
    </div>
  );
}

export default HomePage;
