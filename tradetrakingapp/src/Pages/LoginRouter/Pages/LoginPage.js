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

function LoginPage() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const userLogin = (e, userData) => {
    e.preventDefault();
  };

  return (
    <div className="LoginPage">
      <div className="LoginForm">
        <form onSubmit={(e) => userLogin(e, { userEmail, userPassword })}>
          <EmailInputComp
            fieldName={"User Email"}
            inputValue={(userNameValue) => {
              setUserEmail(userNameValue);
            }}
          />
          <br />
          <TextInputComp
            fieldName={"Password"}
            inputValue={(userNameValue) => {
              setUserPassword(userNameValue);
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
