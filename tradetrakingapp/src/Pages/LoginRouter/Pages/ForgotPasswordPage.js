import TextInputComp from "../../../Components/SharedComponents/TextInputComp";
import EmailInputComp from "../../../Components/SharedComponents/EmailInputComp";
import SubmitInputComp from "../../../Components/SharedComponents/SubmitInputComp";
import LoginLinkComp from "../../../Components/LoginRegisterComps/LoginLinkComp";
import { useState } from "react";

function ForgotPasswordPage() {
  const [email,setEmail] = useState("");
  const [securityQuestionID,setSecurityQuestionID] = useState("");
  const [answer,setAnswer] = useState("");

  const forgotPassword = (e,userData) => {
    e.preventDefault()
  }
  return (
    <div className="LoginPage">
    <div className="LoginForm">
        <form onSubmit={(e) => forgotPassword(e,{email,securityQuestionID,answer})} >
          <EmailInputComp fieldName="User Email" inputValue={(e) => setEmail(e)}/><br/>
          <TextInputComp fieldName="Security Question" inputValue={(e) => setSecurityQuestionID(e)} /><br/>
          <TextInputComp fieldName="Answer"  inputValue={(e) => setAnswer(e)}/><br/>
          <SubmitInputComp value="Validation"  /><br/>
        </form>
        <LoginLinkComp forgot={true} />
    </div>
    </div>
  );
}

export default ForgotPasswordPage;
