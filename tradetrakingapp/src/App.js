// Components
import FooterInfoComp from "./Components/SharedComponents/FooterInfoComp";
import LoginRouterComp from "./Pages/LoginRouter/LoginRouterComp";
import HomeRouterComp from "./Pages/HomeRouter/HomeRouterComp";

// Modules
import { useSelector } from "react-redux";

// Css
import "./Css/LoginRegister.css";
import { useEffect } from "react";

function App() {
  const storageData = useSelector((state) => state);
  useEffect(()=>{
    console.log(storageData)
  },[])
  return (
    <div className="App">
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
