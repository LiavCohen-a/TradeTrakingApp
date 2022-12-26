import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import ButtonInputComp from "../../../../Components/SharedComponents/ButtonInputComp";
import NumberInputComp from "../../../../Components/SharedComponents/NumberInputComp";
import RespPopUpComp from "../../../../Components/SharedComponents/RespPopUpComp";
import SubmitInputComp from "../../../../Components/SharedComponents/SubmitInputComp";
import TextInputComp from "../../../../Components/SharedComponents/TextInputComp";
import positionService from "../../../../Services/positionService";

function AddPositionComp() {
  const {id} = useParams();
  const navigate = useNavigate();

  const [symbol, setSymbol] = useState("");
  const [margin, setMargin] = useState();
  const [type, setType] = useState("");
  const [leverage, setLeverage] = useState();
  const [entryPrice, setEntryPrice] = useState();
  const [stopLoss, setStopLoss] = useState();
  const [repErr, setResponseErr] = useState("");

  const addPosition =async (e,position) => {
    e.preventDefault();
    let resp = await positionService.addPosition(position)
    if(resp.includes('Created')){
      alert(resp);
      navigate("/positions");
    }else{
      setResponseErr(resp)
    }
  }
 
    return (
      <div>
          <form  className="RouterLinkContainer"
        onSubmit={(e) =>
          addPosition(e, {
            userID: id ,
            symbol,
            margin,
            type,
            leverage,
            entryPrice,
            stopLoss,
          })
        }
      >
            <ButtonInputComp callBack={() => navigate('/positions')} value="cancel" />
            <div className="RouterLinkContainer">
                <div>
            <TextInputComp inputValue={(e) => setSymbol(e)} fieldName="Symbol" />
            <NumberInputComp inputValue={(e) => setMargin(e)} fieldName="Margin" />
            <TextInputComp inputValue={(e) => setType(e)} fieldName="Type" />
            </div><div>
            <NumberInputComp inputValue={(e) => setLeverage(e)} fieldName="Leverage" />
            <NumberInputComp inputValue={(e) => setEntryPrice(e)} fieldName="Entry Price" />
            <TextInputComp inputValue={(e) => setStopLoss(e)} fieldName="Stop Loss" />
            </div>
            </div>
            <SubmitInputComp value="Open Position" />
            </form>
            <RespPopUpComp value={repErr} />
      </div>
    );
  }
  
  export default AddPositionComp;
  