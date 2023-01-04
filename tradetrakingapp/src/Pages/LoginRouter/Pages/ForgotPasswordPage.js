// Components
import QuestionDropBoxComp from "../../../Components/SharedComponents/QuestionDropBoxComp";
import SubmitInputComp from "../../../Components/SharedComponents/SubmitInputComp";
import EmailInputComp from "../../../Components/SharedComponents/EmailInputComp";
import LoginLinkComp from "../../../Components/LoginRegisterComps/LoginLinkComp";
import TextInputComp from "../../../Components/SharedComponents/TextInputComp";
import ErrorRespComp from "../../../Components/SharedComponents/ErrorRespComp";

// Modules
import userService from "../../../Services/userService";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// Css

function ForgotPasswordPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [securityQuestionID, setSecurityQuestionID] = useState("");
  const [userAnswer, setAnswer] = useState("");
  const [repErr, setResponseErr] = useState("");

  const forgotPassword = async (e, userData) => {
    e.preventDefault();
    let resp = await userService.forgotPasswordRequest(userData);
    if (resp.resp.includes("not")) {
      setResponseErr(resp.resp);
    } else {
      // get user data and go to reset password
      navigate("/ResetPassword/" + resp.userData._id);
    }
  };
  return (
    <div>
      <div  className="Center Margin">
        <form 
          onSubmit={(e) =>
            forgotPassword(e, { email, securityQuestionID, userAnswer })
          }
        >
          <EmailInputComp
            fieldName="User Email"
            inputValue={(e) => setEmail(e)}
          />
       
          <QuestionDropBoxComp inputValue={(e) => setSecurityQuestionID(e)} />
       
          <TextInputComp fieldName="Answer" inputValue={(e) => setAnswer(e)} />
          <br />
          <SubmitInputComp value="Validation" />
          <br />
        </form>
        <ErrorRespComp value={repErr} />   
        <LoginLinkComp forgot={true} />

      </div>
    </div>
  );
}

export default ForgotPasswordPage;
