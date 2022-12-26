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
      className="PositionContainer"
    >
      <div className="PositionDataContainer">
        <div className="PositionData" style={{ color: typeColor }}>
          {props.position.type == "Long" ? "L" : "S"}
        </div>
        <div className="PositionData">X{props.position.leverage}</div>
        <div className="PositionData">SL -- {props.position.stopLoss}$</div>
      </div>
      <div className="PositionDataContainer">
        <div className="PositionData"><div>Symbol</div>{props.position.symbol}</div>
        <div className="PositionData"><div>Margin</div>{props.position.margin}</div>
        <div className="PositionData"><div>Size(USD)</div>{props.position.size}</div>
      </div>
      <div className="PositionDataContainer">
        <div className="PositionData">
        <div>Entry Price</div>

        {props.position.entryPrice}
        </div>
        {props.position.positionClosed ? (
          <div className="PositionData">
                      <div>Close Price</div>

            {props.position.closePrice}$
          </div>
        ) : (
          ""
        )}

            {
                props.position.positionClosed ? 
                <div className="PositionData">
                <div>PNL(USD)</div>
                {
                     props.position.type ==='Long' ?
                     props.position.closePrice-props.position.entryPrice:

                props.position.entryPrice-props.position.closePrice
                }
                </div>
                :
                <div className="PositionData">
                    <div>Liquidity Price</div>
                    {props.position.liquidityPrice}
                </div>
            }
        
        
        {props.position.positionClosed ? (
          <div className="PositionData">
            <div>Close Date </div>
            {props.position.positionClosedDate.split("T")[0]}{" "}
          </div>
        ) :<div className="PositionData">
        <div>Open Date</div>
        {props.position.positionOpenDate.split("T")[0]}{" "}
      </div>}
      </div>
    </div>
  );
}

export default PositionComp;
