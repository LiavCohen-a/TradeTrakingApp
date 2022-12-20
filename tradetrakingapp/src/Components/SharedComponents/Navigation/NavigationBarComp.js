// Components
import NavLinkComp from "./NavLinkComp";

// Modules
import { Routes, Route, Link } from "react-router-dom";

// Css
import '../../../Css/NavigationBar.css';
import '../../../Css/Mobile.css';

function NavigationBarComp() {
  return (
    <div className="NavBarContainer">
      <div className="RouterLinkContainer HomeRouteContainer">
        <div>
              logo
          </div>
          <div className="RouterLinkContainer" >
          <NavLinkComp linkValue="Dashboard" linkRoute="/Dashboard" />
          <NavLinkComp linkValue="Positions" linkRoute="/Positions" />
          <NavLinkComp linkValue="Statistics" linkRoute="/Statistics" />
          <NavLinkComp linkValue="Transactions" linkRoute="/Transactions" />
          </div>
          <div>
              welcome
          </div>
      </div>
        learn more about : crypto/blockchain/andmore
    </div>
  );
}

export default NavigationBarComp;
