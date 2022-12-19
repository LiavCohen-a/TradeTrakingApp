// Components
import ForgotPasswordComp from "../../../components/LoginRegisterComps/ForgotPasswordComp";
import SubmitInputComp from "../../../components/SharedComponents/SubmitInputComp";
import TextInputComp from "../../../components/SharedComponents/TextInputComp";
import RegisterLinkComp from "../../../components/LoginRegisterComps/RegisterLinkComp";

// Modules
import { useState } from "react";

// Css
import "../../../Css/LoginRegister.css";
import "../../../Css/Pages.css";

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
          <TextInputComp
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
