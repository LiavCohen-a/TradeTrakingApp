import LoginRouterComp from './Pages/LoginRouter/LoginRouterComp';
import HomeRouterComp from './Pages/HomeRouter/HomeRouterComp';
import './Css/LoginRegister.css'
import FooterInfoComp from './Components/SharedComponents/FooterInfoComp'
import { useState } from 'react';

function App() {
  const [userLogin,setUserLogin] = useState(false)
  return (
    <div className='App'>
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
