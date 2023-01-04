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
    <div className="">
      <br/>
      <Outlet />

      <div className="DataContainer ">
        <div className="TransactionContainer Border">
        <NavLinkComp
          className="Top"
          linkRoute="deposit"
          linkValue="Deposit"
        />
          { deposit.length >= 0?
            deposit.map(x =>{
              return <TransactionComp key={x._id} transaction={x}/>
            }) : 
            "No Withdrawal Transactions !"
          }

        </div>
        <div className="TransactionContainer Border">       <NavLinkComp
          className="RouterInput"
          linkRoute="Withdrawal"
          linkValue="Withdrawal"
        />
          {
            withdrawal.length >= 0?
            withdrawal.map(x =>{
              return <TransactionComp key={x._id} transaction={x}/>
            }):"No Withdrawal Transactions !"
          }
        </div>
        <div className="TransactionContainer Border">
        <NavLinkComp
          className="RouterInput"
          linkRoute="Transfer"
          linkValue="Transfer"
        />
          { transfer.length >= 0?
            transfer.map(x =>{
              return <TransactionComp key={x._id} transaction={x}/>
            }):"No Withdrawal Transactions !"
          }
        </div>
      </div>
    </div>
  );
}

export default TransactionsPage;
