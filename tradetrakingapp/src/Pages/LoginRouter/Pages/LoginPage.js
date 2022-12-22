// Components
import ForgotPasswordComp from "../../../Components/LoginRegisterComps/ForgotPasswordComp";
import SubmitInputComp from "../../../Components/SharedComponents/SubmitInputComp";
import TextInputComp from "../../../Components/SharedComponents/TextInputComp";
import EmailInputComp from "../../../Components/SharedComponents/EmailInputComp";
import RegisterLinkComp from "../../../Components/LoginRegisterComps/RegisterLinkComp";

// Modules
import { useState } from "react";

// Css
import "../../../Css/LoginRegister.css";
import "../../../Css/Shared.css";
import userService from "../../../Services/userService";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userLogin =async (e, userData) => {
    e.preventDefault();
    let isSuccsusfulyLogin = await userService.loginRequest(userData);
  };

  return (
    <div className="LoginPage">
      <div className="LoginForm">
        <form onSubmit={(e) => userLogin(e, { email, password })}>
          <EmailInputComp
            fieldName={"User Email"}
            inputValue={(userNameValue) => {
              setEmail(userNameValue);
            }}
          />
          <br />
          <TextInputComp
            fieldName={"Password"}
            inputValue={(userNameValue) => {
              setPassword(userNameValue);
            }}
          />
          <br />
          <ForgotPasswordComp /> <br />
          <SubmitInputComp value="Login" />
        </form>
      </div>
      <br />
      <RegisterLinkComp />
    </div>
  );
}

export default LoginPage;
