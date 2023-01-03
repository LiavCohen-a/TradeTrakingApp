// Components
import NavLinkComp from "./NavLinkComp";

// Modules

// Css
import '../../../Css/NavigationBar.css';
import '../../../Css/Mobile.css';
import ButtonInputComp from "../ButtonInputComp";
import { useDispatch, useSelector } from "react-redux";

function NavigationBarComp() {
  const dispatch = useDispatch();
  const storageData = useSelector((state) => state);

  const logOut = () => { 
    dispatch({type:"LOGOUT",payload : {}})
  }
  return (
    <div className="NavBarContainer App">
      <div className="HoneLinkContainer HomeRouteContainer">
        <div>
        <NavLinkComp className="NavLink" linkValue="logo" linkRoute="/" />
              
          </div>
          <div>
            <div className="HoneLinkContainer" >
            <NavLinkComp className="NavLink" linkValue="Dashboard" linkRoute="/Dashboard" />
            <NavLinkComp className="NavLink" linkValue="Positions" linkRoute="/Positions" />
            <NavLinkComp className="NavLink" linkValue="Statistics" linkRoute="/Statistics" />
            <NavLinkComp className="NavLink" linkValue="Transactions" linkRoute="/Transactions" />
            </div>
            <br/>
            learn more about : crypto/blockchain/andmore
          </div>

          <div>
              welcome {storageData.loginUser.data.firstName + " " + storageData.loginUser.data.lastName}
              <ButtonInputComp value="Logout" callBack={(value)=>logOut()} />
          </div>
      </div>
    </div>
  );
}

export default NavigationBarComp;
