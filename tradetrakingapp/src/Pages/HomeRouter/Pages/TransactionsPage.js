// Components
import NavLinkComp from "../../../Components/SharedComponents/Navigation/NavLinkComp";

// Modules
import { Outlet } from "react-router-dom";

// Css
import "../../../Css/Transaction.css";

function TransactionsPage() {
  return (
    <div>
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
          <div className="Margin">Deposit</div>
          <div className="Margin">Deposit</div>
          <div className="Margin">Deposit</div>
        </div>
        <div className="TransactionContainer">
          <div className="Margin">Withdrawal</div>
          <div className="Margin">Withdrawal</div>
          <div className="Margin">Withdrawal</div>
        </div>
        <div className="TransactionContainer">
          <div className="Margin">Transfer</div>
          <div className="Margin">Transfer</div>
          <div className="Margin">Transfer</div>
        </div>
      </div>
    </div>
  );
}

export default TransactionsPage;
