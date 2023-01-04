// Components
import NavLinkComp from "../../Components/SharedComponents/Navigation/NavLinkComp";
import ForgotPasswordPage from "./Pages/ForgotPasswordPage";
import ResetPasswordPage from "./Pages/ResetPasswordPage";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";

// Modules
import { Routes, Route } from "react-router-dom";

// Css
import "../../Css/LoginRegister.css";

function LoginRouterComp() {
  return (
    <div className="LoginRouterComp " >
      <h5>Welcome To Trade Tracking App</h5>
      <div className="RouterLinkContainer LoginLink">
        <NavLinkComp className="RouterInput" linkRoute="/" linkValue="Login" />
        <NavLinkComp  className="RouterInput" linkRoute="/Register" linkValue="Register" />
      </div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="/ForgotPassword" element={<ForgotPasswordPage />} />
        <Route path="/ResetPassword/:id" element={<ResetPasswordPage />} />
      </Routes>
    </div>
  );
}

export default LoginRouterComp;
