import ButtonInputComp from "../../../../Components/SharedComponents/ButtonInputComp";
import NumberInputComp from "../../../../Components/SharedComponents/NumberInputComp";
import SubmitInputComp from "../../../../Components/SharedComponents/SubmitInputComp";
import TextInputComp from "../../../../Components/SharedComponents/TextInputComp";

function AddPositionComp() {
 
    return (
      <div className="RouterLinkContainer">
            <ButtonInputComp  value="cancel" />
            <div className="RouterLinkContainer">
                <div>
            <TextInputComp fieldName="Symbol" />
            <NumberInputComp fieldName="Margin" />
            <TextInputComp fieldName="Type" />
            </div><div>
            <NumberInputComp fieldName="Leverage" />
            <NumberInputComp fieldName="Entry Price" />
            <TextInputComp fieldName="Stop Loss" />
            </div>
            </div>
            <SubmitInputComp value="Open Position" />
      </div>
    );
  }
  
  export default AddPositionComp;
  