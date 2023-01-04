// Components

import { useNavigate } from "react-router";

// Modules

// Css

function PositionComp(props) {
  const navigate = useNavigate();
  let typeColor = props.position.type == "Long" ? "green" : "red";

  return (
    <div
      onClick={() => navigate("/position/" + props.position._id)}
      className="PositionContainer Center Border" >  
        <div  style={{ color: typeColor }}>
          {props.position.type == "Long" ? "L" : "S"}
        </div>
        <div >X{props.position.leverage}</div>
        <div >SL -- {props.position.stopLoss}$</div>
        <div ><div>Symbol</div>{props.position.symbol}</div>
        <div ><div>Margin</div>{props.position.margin}</div>
        <div ><div>Size(USD)</div>{props.position.size}</div>
        <div >
        <div>Entry Price</div>

        {props.position.entryPrice}
        </div>
        {props.position.positionClosed ? (
          <div >
                      <div>Close Price</div>

            {props.position.closePrice}$
          </div>
        ) : (
          ""
        )}

            {
                props.position.positionClosed ? 
                <div >
                <div>PNL(USD)</div>
                {
                     props.position.type ==='Long' ?
                     props.position.closePrice-props.position.entryPrice:

                props.position.entryPrice-props.position.closePrice
                }
                </div>
                :
                <div >
                    <div>Liquidity Price</div>
                    {props.position.liquidityPrice}
                </div>
            }
        
        
        {props.position.positionClosed ? (
          <div >
            <div>Close Date </div>
            {props.position.positionClosedDate.split("T")[0]}{" "}
          </div>
        ) :<div >
        <div>Open Date</div>
        {props.position.positionOpenDate.split("T")[0]}{" "}
      </div>}
      </div>
   
  );
}

export default PositionComp;
