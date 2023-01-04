// Components
import ForgotPasswordComp from "../../../Components/LoginRegisterComps/ForgotPasswordComp";
import SubmitInputComp from "../../../Components/SharedComponents/SubmitInputComp";
import TextInputComp from "../../../Components/SharedComponents/TextInputComp";
import EmailInputComp from "../../../Components/SharedComponents/EmailInputComp";
import RegisterLinkComp from "../../../Components/LoginRegisterComps/RegisterLinkComp";
import PasswordInputComp from "../../../Components/SharedComponents/PasswordInputComp";

// Modules
import userService from "../../../Services/userService";
import { useDispatch } from "react-redux";
import { useState } from "react";

// Css
import "../../../Css/LoginRegister.css";
import "../../../Css/Shared.css";
import ErrorRespComp from "../../../Components/SharedComponents/ErrorRespComp";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [responseTxt, setResponseTxt] = useState("");

  const dispatch = useDispatch();

  const userLogin = async (e, userData) => {
    e.preventDefault();
    let isSuccessfullyLogin = await userService.loginRequest(userData);
    if (
      isSuccessfullyLogin.resp != undefined &&
      isSuccessfullyLogin.resp.includes("successfully")
    ) {
      dispatch({ type: "LOGIN", payload: isSuccessfullyLogin.data });
    } else {
      setResponseTxt(isSuccessfullyLogin);
    }
  };
  return (
    <div>
      <div className="Center Margin">
        <form onSubmit={(e) => userLogin(e, { email, password })}>
          <EmailInputComp
            fieldName={"User Email"}
            inputValue={(userNameValue) => {
              setEmail(userNameValue);
            }}
          />
          <br />
          <PasswordInputComp
            inputValue={(userPassValue) => {
              setPassword(userPassValue);
            }}
          />
        
          <ForgotPasswordComp /> <br />
          <SubmitInputComp value="Login" />
        </form>
      </div>
      <ErrorRespComp value={responseTxt} />
      <RegisterLinkComp />
    </div>
  );
}

export default LoginPage;
