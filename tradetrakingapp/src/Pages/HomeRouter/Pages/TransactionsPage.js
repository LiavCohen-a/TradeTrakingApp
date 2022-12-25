// Components
import NavLinkComp from "../../../Components/SharedComponents/Navigation/NavLinkComp";
import TransactionComp from "../Pages/Transaction/TransactionComp";

// Modules
import { Outlet } from "react-router-dom";

// Css
import "../../../Css/Transaction.css";
import { useEffect, useState } from "react";
import transactionService from "../../../Services/transactionService";
import { useSelector } from "react-redux";

function TransactionsPage() {
  const storageData = useSelector((state) => state);
  const [deposit,setDeposit] = useState([]);
  const [withdrawal,setWithdrawal] = useState([]);
  const [transfer,setTransfer] = useState([]);
  useEffect(() => {
    getData();
  },[])

  const getData =async () => {
    let deposit = await transactionService.getUserTransactionsByType({userIDAsk:storageData.loginUser.data._id,typeAsk:"Deposit"})
    let transfer = await transactionService.getUserTransactionsByType({userIDAsk:storageData.loginUser.data._id,typeAsk:"Transfer"})
    let withdrawal = await transactionService.getUserTransactionsByType({userIDAsk:storageData.loginUser.data._id,typeAsk:"Withdrawal"})
    setDeposit(deposit)
    setWithdrawal(withdrawal)
    setTransfer(transfer)
  }
  return (
    <div className="TransactionPageContainer">
      <div className="DataContainer">
        <NavLinkComp
          className="RouterInput"
          linkRoute="deposit"
          linkValue="Deposit"
        />
        <NavLinkComp
          className="RouterInput"
          linkRoute="Withdrawal"
          linkValue="Withdrawal"
        />
        <NavLinkComp
          className="RouterInput"
          linkRoute="Transfer"
          linkValue="Transfer"
        />
      </div>
      <Outlet />
      <div className="DataContainer">
        <div className="TransactionContainer">
          {
            deposit.map(x =>{
              return <TransactionComp key={x._id} transaction={x}/>
            })
          }

        </div>
        <div className="TransactionContainer">
          {
            withdrawal.map(x =>{
              return <TransactionComp key={x._id} transaction={x}/>
            })
          }
        </div>
        <div className="TransactionContainer">
          {
            transfer.map(x =>{
              return <TransactionComp key={x._id} transaction={x}/>
            })
          }
        </div>
      </div>
    </div>
  );
}

export default TransactionsPage;
