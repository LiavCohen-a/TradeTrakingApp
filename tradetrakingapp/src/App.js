// Components
import FooterInfoComp from "./Components/SharedComponents/FooterInfoComp";
import LoginRouterComp from "./Pages/LoginRouter/LoginRouterComp";
import HomeRouterComp from "./Pages/HomeRouter/HomeRouterComp";

// Modules
import { useSelector } from "react-redux";

// Css
import "./Css/LoginRegister.css";

function App() {
  const storageData = useSelector((state) => state);
  return (
    <div >
      {storageData.loginUser.isLogin ? (
        <HomeRouterComp />
      ) : (
        
        <div className="RouterPagesContainer">
          
          <LoginRouterComp />
        </div>
      )}
      <FooterInfoComp />
    </div>
  );
}

export default App;
