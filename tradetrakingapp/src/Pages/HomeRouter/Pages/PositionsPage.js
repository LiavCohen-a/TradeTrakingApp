// Components
import NavLinkComp from "../../../Components/SharedComponents/Navigation/NavLinkComp";

// Modules
import { Outlet } from "react-router-dom";

// Css
import "../../../Css/Position.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import positionService from "../../../Services/positionService";
import PositionComp from "./Position/PositionComp";

function PositionsPage() {
  const storageData = useSelector((state) => state);
  const [openPositions, setOpenPositions] = useState([]);
  const [closePositions, setClosePositions] = useState([]);

  useEffect(() => {
    getData()
  }, []);

  const getData =async () => {
    let userPositions = await positionService.getAllUserPositions(storageData.loginUser.data._id)
    let closePositions = [];
    let openPositions = userPositions.filter(x => {
      if(x.positionClosed === false){
        return x

      }else{
        closePositions.push(x)
      }
    })
    setOpenPositions(openPositions)
    setClosePositions(closePositions)
  }
  return (
    <div  className=" ">
      <div className="DataContainer ">
        <NavLinkComp
          linkValue="Add Position"
          linkRoute={"AddPosition/"+storageData.loginUser.data._id}
        />
      </div>
      <Outlet />
      <div className="FlexCenter">
      <div className="Border Center PositionsContainer Margin">
       <b> open Positions</b><br/>
        {
          openPositions.length > 0 ?
          openPositions.map(position => {
            return <PositionComp key={position._id} position={position} />

          }) :
          'No open positions'
        }      <br/>

      </div>
      <div className=" Border Center PositionsContainer Margin">
      <b>close Positions</b><br/>
        {
           closePositions.length > 0 ?
          closePositions.map(position => {
            return <PositionComp key={position._id} close={true} position={position} />

          })
          :
          'No close positions'
        }
              <br/>
      </div>
      </div>
     <br/><br/><br/>
    </div>
  );
}

export default PositionsPage;
