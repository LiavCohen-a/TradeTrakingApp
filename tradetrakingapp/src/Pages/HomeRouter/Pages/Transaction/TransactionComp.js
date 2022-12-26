// Components

import { useNavigate } from "react-router";

// Modules

// Css

function TransactionComp(props) {
  const navigate = useNavigate();
  return (
    <div className="Border">
        <div className="Margin Center TransactionData">Transaction ID : {props.transaction._id}</div>
        <div  className="Margin Center">USD Amount  :  {props.transaction.usdAmount}  <b>|||||</b>  Is Succeed : {props.transaction._id ? 'V' : 'X'}</div>
        {props.transaction.type ==='Transfer' ? 
        <div  className="Margin Center">To User ID  :  {props.transaction.transferUserID}</div>
        :
        ""
        }
    </div>
  );
}

export default TransactionComp;
