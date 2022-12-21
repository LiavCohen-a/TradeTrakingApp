import { Outlet } from "react-router-dom";
import NavLinkComp from "../../../Components/SharedComponents/Navigation/NavLinkComp";
import '../../../Css/Position.css';
function PositionsPage() {
 
  return (
    <div>
      <div className="DataContainer">
        <NavLinkComp  className="RouterInput" linkValue="Add Position" linkRoute="AddPosition" />
      </div>
{/* 
  maploop

*/} 
      <Outlet />
        <div className="Box Center">
            open Positions
            <div className="PositionContainer">
              position
            </div>
            <div className="PositionContainer">
              position
            </div>
        </div>
        <div className="Box Center">
            close Positions
            <div className="PositionContainer">
              position
            </div>
            <div className="PositionContainer">
              position
            </div>
        </div>
    </div>
  );
}

export default PositionsPage;
