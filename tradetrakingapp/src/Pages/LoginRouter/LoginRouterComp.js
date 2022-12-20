// Components
import ForgotPasswordPage from "./Pages/ForgotPasswordPage";
import ResetPasswordPage from "./Pages/ResetPasswordPage";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";

// Modules
import { Routes, Route, Link } from "react-router-dom";

// Css
import "../../Css/LoginRegister.css";

function LoginRouterComp() {
  return (
    <div className="LoginRouterComp">
      <h5 style={{ textAlign: "center" }}>Welcome To The Trade Tracking App</h5>
      <div className="RouterLinkContainer LoginRoute">
        <Link className="RouterInput Link" to={"/"}>
          Login
        </Link>
        <Link className="RouterInput Link" to={"/Register"}>
          Register
        </Link>
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
