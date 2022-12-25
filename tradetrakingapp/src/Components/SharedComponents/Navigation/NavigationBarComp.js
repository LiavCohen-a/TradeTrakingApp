// Components
import NavLinkComp from "./NavLinkComp";

// Modules

// Css
import '../../../Css/NavigationBar.css';
import '../../../Css/Mobile.css';
import ButtonInputComp from "../ButtonInputComp";
import { useDispatch } from "react-redux";

function NavigationBarComp() {
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch({type:"LOGOUT",payload : {}})
  }
  return (
    <div className="NavBarContainer">
      <div className="HoneLinkContainer HomeRouteContainer">
        <div>
              logo
          </div>
          <div className="HoneLinkContainer" >
          <NavLinkComp className="NavLink" linkValue="Dashboard" linkRoute="/Dashboard" />
          <NavLinkComp className="NavLink" linkValue="Positions" linkRoute="/Positions" />
          <NavLinkComp className="NavLink" linkValue="Statistics" linkRoute="/Statistics" />
          <NavLinkComp className="NavLink" linkValue="Transactions" linkRoute="/Transactions" />
          </div>
          <div>
              welcome
              <ButtonInputComp value="Logout" callBack={(value)=>logOut} />
          </div>
      </div>
        learn more about : crypto/blockchain/andmore
    </div>
  );
}

export default NavigationBarComp;
