// Components
import NavLinkComp from "./NavLinkComp";

// Modules

// Css
import '../../../Css/NavigationBar.css';
import '../../../Css/Mobile.css';
import ButtonInputComp from "../ButtonInputComp";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function NavigationBarComp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const storageData = useSelector((state) => state);

  const logOut = () => { 
    dispatch({type:"LOGOUT",payload : {}})
    navigate('/')
  }
  return (
      <div className="FlexCenter NavBarContainer App">
        <div>
        <NavLinkComp  linkValue="Home Page" linkRoute="/" />
              
          </div>
          <div>
            <div className="FlexCenter" >
            <NavLinkComp linkValue="Dashboard" linkRoute="/Dashboard" />
            <NavLinkComp linkValue="Positions" linkRoute="/Positions" />
            <NavLinkComp linkValue="Transactions" linkRoute="/Transactions" />
            <NavLinkComp linkValue="Statistics" linkRoute="/Statistics" />
            </div>
            <br/>
            learn more about : crypto/blockchain/andmore
          </div>

          <div>
              <ButtonInputComp value="Logout" callBack={(value)=>logOut()} />
          </div>
      </div>
  );
}

export default NavigationBarComp;
