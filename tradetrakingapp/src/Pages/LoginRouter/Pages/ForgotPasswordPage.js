import TextInputComp from "../../../Components/SharedComponents/TextInputComp";
import EmailInputComp from "../../../Components/SharedComponents/EmailInputComp";
import SubmitInputComp from "../../../Components/SharedComponents/SubmitInputComp";
import LoginLinkComp from "../../../Components/LoginRegisterComps/LoginLinkComp";
import { useState } from "react";
import userService from "../../../Services/userService";
import QuestionDropBoxComp from "../../../Components/SharedComponents/QuestionDropBoxComp";
import RespPopUpComp from "../../../Components/SharedComponents/RespPopUpComp";
import { useNavigate } from "react-router-dom";

function ForgotPasswordPage() {
  const navigate = useNavigate();

  const [email,setEmail] = useState("");
  const [securityQuestionID,setSecurityQuestionID] = useState("");
  const [userAnswer,setAnswer] = useState("");
  const [repErr, setResponseErr] = useState("");

  const forgotPassword =async (e,userData) => {
    e.preventDefault()
    let resp = await userService.forgotPasswordRequest(userData);
    if(resp.resp.includes("not")){
      setResponseErr(resp.resp)
    }else{
      // get user data and go to reset password
      navigate('/ResetPassword/'+ resp.userData._id)
    }
  }
  return (
    <div className="LoginPage">
    <div className="LoginForm">
        <form onSubmit={(e) => forgotPassword(e,{email,securityQuestionID,userAnswer})} >
          <EmailInputComp fieldName="User Email" inputValue={(e) => setEmail(e)}/><br/>
          <QuestionDropBoxComp  inputValue={(e) => setSecurityQuestionID(e)} /><br/>
          <TextInputComp fieldName="Answer"  inputValue={(e) => setAnswer(e)}/><br/>
          <SubmitInputComp value="Validation"  /><br/>
        </form>
        <RespPopUpComp value={repErr} />
        <br/>
        <LoginLinkComp forgot={true} />
    </div>
    </div>
  );
}

export default ForgotPasswordPage;
