import LoginRouterComp from './Pages/LoginRouter/LoginRouterComp';
import HomeRouterComp from './Pages/HomeRouter/HomeRouterComp';
import './Css/LoginRegister.css'
import FooterInfoComp from './Components/SharedComponents/FooterInfoComp'
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

function App() {
  const [userLogin,setUserLogin] = useState(true)
  return (
    <div >
      {
        userLogin ? 
        <HomeRouterComp/>
        :
        <div className="RouterPagesContainer">
         <LoginRouterComp />
        </div>
      }
        <FooterInfoComp />
    </div>
  );
}

export default App;
