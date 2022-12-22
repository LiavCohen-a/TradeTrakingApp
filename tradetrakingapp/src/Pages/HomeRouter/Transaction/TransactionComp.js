// Components

import ButtonInputComp from "../../../Components/SharedComponents/ButtonInputComp";
import NumberInputComp from "../../../Components/SharedComponents/NumberInputComp";
import SubmitInputComp from "../../../Components/SharedComponents/SubmitInputComp";
import TextInputComp from "../../../Components/SharedComponents/TextInputComp";

// Modules

// Css

function TransactionComp(props) {
    return (
        <div style={{background:'red'}}  className='DataContainer'>
        
        <div className="RouterLinkContainer">
            <ButtonInputComp  value="cancel" />
            <div className="RouterLinkContainer">
            <div>
            <NumberInputComp fieldName={props.transactionType + " USD Amount"} />
            {
                props.transactionType == "Transfer" ? <TextInputComp fieldName="Transfer To UserID" />
                : null
            }
            <TextInputComp fieldName="New Total Margin" />
            </div>
            </div>
            <SubmitInputComp value="Submit Order" />
      </div>
        
      </div>
    );
  }
  
  export default TransactionComp;
  