import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import positionService from "../../../Services/positionService";
import transactionService from "../../../Services/transactionService";

function HomePage() {
  const storageData = useSelector((state) => state);
  const [user, setUser] = useState({});
  const [winingPositions, setWiningPositions] = useState(0);
  const [positionsLength, setPositionsLength] = useState(0);
  const [transactionsLength, setTransactionsLength] = useState(0);
  const [lastTransaction, setLastTransaction] = useState({});

  useEffect(() => {
    setUser(storageData.loginUser.data);
    getData();
  }, []);
  const getData = async () => {
    let positions = await positionService.getAllUserPositions(
      storageData.loginUser.data._id
    );
    let resp = positions.filter(x => !x.positionClosed)
    setPositionsLength(resp.length);
    let transactions = await transactionService.getAllUserTransactions(
      storageData.loginUser.data._id
    );
    setLastTransaction(transactions[0]);
    setTransactionsLength(transactions.length);
    let result = positions.filter((x) => {
      if (x.positionClosed) {
        if (x.type === "Long") {
          if (x.entryPrice < x.closePrice) {
            return x;
          }
        } else {
          if (x.entryPrice > x.closePrice) {
            return x;
          }
        }
      }
    });
    setWiningPositions(result.length);
  };
  return (
    <div className="PageContainer">
      <div className="DataContainer">
        <div className="Box">
          <b>User Data</b>
          <br />
          <div>ID: {user._id}</div>
          <div>Current Margin : {user.accountCurrentMargin}$</div>
          <div>Email : {user.email}</div>
        </div>
        <div className="Box">
          <b>Transactions</b>
          <br />
          Amount : {transactionsLength} <br />
          Last transaction :
          {lastTransaction ? lastTransaction._id : "No transaction yet"}
        </div>
        <div className="Box">
            <b>Positions</b>
            <br />
            Wining positions : {winingPositions}
            <div>Open Positions : {positionsLength}</div>
            USD PNL : {user.accountStartingPoint - user.accountCurrentMargin}$
            <br />
        </div>
      </div>
      <div className="DataContainer Text">coins data</div>
      <div className="DataContainer Text">what is cryptoa</div>
    </div>
  );
}

export default HomePage;
