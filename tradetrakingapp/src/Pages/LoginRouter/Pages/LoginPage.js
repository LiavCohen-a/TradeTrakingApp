// Components
import ForgotPasswordComp from "../../../components/LoginRegisterComps/ForgotPasswordComp";
import SubmitInputComp from "../../../components/SharedComponents/SubmitInputComp";
import TextInputComp from "../../../components/SharedComponents/TextInputComp";
import SignUpComp from "../../../components/LoginRegisterComps/SignUpComp";

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
            fieldValue=""
            inputValue={(userNameValue) => {
              setUserEmail(userNameValue);
            }}
          />
          <br />
          <TextInputComp
            fieldName={"Password"}
            fieldValue=""
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
      <SignUpComp />
    </div>
  );
}

export default LoginPage;
