import ButtonInputComp from "../../../../Components/SharedComponents/ButtonInputComp";
import NavLinkComp from "../../../../Components/SharedComponents/Navigation/NavLinkComp";
import NumberInputComp from "../../../../Components/SharedComponents/NumberInputComp";
import SubmitInputComp from "../../../../Components/SharedComponents/SubmitInputComp";
import TextInputComp from "../../../../Components/SharedComponents/TextInputComp";

function AddPositionComp() {
  return (
    <div className="PositionContainer Center Box">
      <ButtonInputComp
        value="Return"
      />
      <div className="RouterLinkContainer">
        <div>
          <div>
            headLine
            <TextInputComp fieldName="Type" />
          </div>
          <div>
            headLine
            <TextInputComp fieldName="Symbol" />
          </div>
          <div>
            headLine
            <NumberInputComp fieldName="Margin" />
          </div>
        </div>
        <div>
          <div>
            headLine
            <NumberInputComp fieldName="Leverage" />
          </div>
          <div>
            headLine
            <NumberInputComp fieldName="Entry Price" />
          </div>
          <div>
            headLine
            <NumberInputComp fieldName="Liquidity Price" />
          </div>
        </div>
        <div></div>
        <div>
          <div>
            headLine
            <NumberInputComp fieldName="Stop Loss" />
          </div>
          <div>
            headLine
            <NumberInputComp fieldName="Size (USD)" />
          </div>
          <div>
            headLine
            <NumberInputComp fieldName="Close Price" />
          </div>
        </div>
        <div>
          <div>
            headLine
            <TextInputComp fieldName="Open Date" />
          </div>
          <div>
            headLine
            <TextInputComp fieldName="Close Date" />
          </div>
          <div>
            headLine
            <NumberInputComp fieldName="Total PNL(USD)" />
          </div>
        </div>
      </div>
      <SubmitInputComp  value="Open Position" />
    </div>
  );
}

export default AddPositionComp;
