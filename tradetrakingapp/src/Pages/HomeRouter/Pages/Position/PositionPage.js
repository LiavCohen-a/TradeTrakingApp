import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import ButtonInputComp from "../../../../Components/SharedComponents/ButtonInputComp";
import NavLinkComp from "../../../../Components/SharedComponents/Navigation/NavLinkComp";
import NumberInputComp from "../../../../Components/SharedComponents/NumberInputComp";
import SubmitInputComp from "../../../../Components/SharedComponents/SubmitInputComp";
import TextInputComp from "../../../../Components/SharedComponents/TextInputComp";
import positionService from "../../../../Services/positionService";

function PositionPage() {
  const navigate = useNavigate();
  const {id} = useParams();
  const [position,setPosition] = useState({});
  const [closePositionBool,setClosePositionBool] = useState(false);
  const [closePrice,setClosePrice] = useState(0);
  useEffect(() => {
    getData()
  },[])
  const getData =async () =>{
    let resp = await positionService.GetPositionByID(id);
    setPosition(resp)
  }

  const userClosePosition =async (e) => {
    e.preventDefault();
    let resp = await positionService.closePosition(id,{closePrice });
    if(resp.includes('Updated')){
      alert('position closed successfully')
      navigate('/positions')
    }

  }
  return (
    <div className="Center Box">
      <ButtonInputComp
        value="Return"
        callBack={()=>navigate('/positions')}
      />
      <form onSubmit={(e) => userClosePosition(e)}>
      <div className="RouterLinkContainer">
        <div>
          <div>
          <b>Type</b>
            <TextInputComp fieldName={position.type} />
          </div>
          <div>
          <b>Symbol</b>
            <TextInputComp fieldName={position.symbol} />
          </div>
          <div>
          <b>Margin</b>
            <NumberInputComp fieldName={position.margin} />
          </div>
        </div>
        <div>
          <div>
          <b>Leverage</b>
            <NumberInputComp fieldName={position.leverage} />
          </div>
          <div>
          <b>Entry Price</b>
            <NumberInputComp fieldName={position.entryPrice}/>
          </div>
          <div>
          <b>Liquidity Price</b>
            <NumberInputComp fieldName={position.liquidityPrice}/>
          </div>
        </div>
        <div></div>
        <div>
          <div>
          <b>Stop Loss</b>
            <NumberInputComp fieldName={position.stopLoss}/>
          </div>
          <div>
          <b>Size (USD)</b>
            <NumberInputComp fieldName={position.size} />
          </div>
          <div>
          <b>Open Date</b>
            <TextInputComp fieldName={position.positionOpenDate? position.positionOpenDate.split('T')[0] : '' }/>
          </div>
        </div>
      {
        position.positionClosed ? 
        <div>
        <div>
          <b>Close Date</b>
            <TextInputComp fieldName={position.positionClosedDate? position.positionClosedDate.split('T')[0] : ''}/>
          </div>
          <div>
          <b>Total PNL(USD)</b>
            <NumberInputComp fieldName={position.closePrice - position.entryPrice}/>
        </div>
        </div>
        : 
         ""
      }
      </div>
      {position.positionClosed?'': closePositionBool ?  
        <div>
          <div>
          <b>Close Price</b>
            <NumberInputComp inputValue={(e) => setClosePrice(e)} fieldName={position.closePrice}/>
          </div>
          
        </div>
        :
        closePositionBool ?  '':  <ButtonInputComp
        value="Close Position"
        callBack={()=>setClosePositionBool(!closePositionBool)}
      />
        }
        <br/>
        {
          closePositionBool ? <SubmitInputComp  value="Close Position"  /> :'' 
        }
     
     </form>
    </div>
  );
}

export default PositionPage;
