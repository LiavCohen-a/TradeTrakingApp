// Components
import ForgotPasswordPage from "./Pages/ForgotPasswordPage";
import ResetPasswordPage from "./Pages/ResetPasswordPage";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";
import NavLinkComp from '../../Components/SharedComponents/Navigation/NavLinkComp';

// Modules
import { Routes, Route, Link, Outlet } from "react-router-dom";

// Css
import "../../Css/LoginRegister.css";

function LoginRouterComp() {
  return (
    <div className="LoginRouterComp">
      <h5 >Welcome To The Trade Tracking App</h5>
      <div className="RouterLinkContainer ">
      <NavLinkComp className="RouterInput" linkRoute="/" linkValue="Login" />
      <NavLinkComp className="RouterInput" linkRoute="/Register" linkValue="Register" />
      </div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="/ForgotPassword" element={<ForgotPasswordPage />} />
        <Route path="/ResetPassword" element={<ResetPasswordPage />} />
      </Routes>

    </div>
  );
}

export default LoginRouterComp;
