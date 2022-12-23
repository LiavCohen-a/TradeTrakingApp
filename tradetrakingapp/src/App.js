import LoginRouterComp from './Pages/LoginRouter/LoginRouterComp';
import HomeRouterComp from './Pages/HomeRouter/HomeRouterComp';
import './Css/LoginRegister.css'
import FooterInfoComp from './Components/SharedComponents/FooterInfoComp'
import { useSelector } from 'react-redux';

function App() {
  const storageData = useSelector(state => state)
  return (
    <div className='App'>
      {
        storageData.loginUser.isLogin ? 
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
