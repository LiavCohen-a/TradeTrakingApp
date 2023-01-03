// Components
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import ButtonInputComp from "../../../../Components/SharedComponents/ButtonInputComp";
import NumberInputComp from "../../../../Components/SharedComponents/NumberInputComp";
import SubmitInputComp from "../../../../Components/SharedComponents/SubmitInputComp";
import TextInputComp from "../../../../Components/SharedComponents/TextInputComp";
import transactionService from "../../../../Services/transactionService";

// Modules

// Css

function AddTransactionComp(props) {
    const storageData = useSelector((state) => state);
    const navigate = useNavigate();
    const [responseTxt, setResponseTxt] = useState("");

    const [usdAmount, setUsdAmount] = useState(0);
    const [transferUserID, setTransferUserID] = useState("");

    const addTransaction =async (e) => {
        e.preventDefault();
        let userAsk = {
            userID : storageData.loginUser.data._id,
            type : props.transactionType,
            usdAmount : usdAmount*1,
            transferUserID
        }
        let resp = await transactionService.addNewTransaction(userAsk);
        if(resp.includes('debt')){
          setResponseTxt(resp)
        }else{
          alert(resp)
          window.location.reload();
        }

      }

  return (
    <div className="DataContainer">
        <form onSubmit={(e) => addTransaction(e)}>
      <div className="RouterLinkContainer">
        <ButtonInputComp callBack={()=>navigate('/transactions')} value="cancel" />
        <div className="RouterLinkContainer">
          <div>
            <NumberInputComp
              inputValue={(e) =>setUsdAmount(e) }
              fieldName={props.transactionType + " USD Amount"}
            />
            {props.transactionType === "Transfer" ? (
              <TextInputComp inputValue={(e) =>setTransferUserID(e) } fieldName="Transfer To UserID" />
            ) : null}
            <TextInputComp fieldValue={usdAmount} fieldName="New Total Margin" />
          </div>
        </div>
        <SubmitInputComp value="Submit Order" />
        
      </div>
      <div>      {responseTxt }
</div>
      </form>
      
    </div>
  );
}

export default AddTransactionComp;
