import TextInputComp from "../../../Components/SharedComponents/TextInputComp";
import SubmitInputComp from "../../../Components/SharedComponents/SubmitInputComp";
import { useState } from "react";

function ResetPasswordPage() {
  const [newPassword,setNewPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");

  const resetPassword = (e,newPassword) => {
    e.preventDefault()
  }
  return (
    <div className="LoginPage">
    <div className="LoginForm">
        <form onSubmit={(e) => resetPassword(e,{newPassword,confirmPassword})} >
          <TextInputComp fieldName="New Password"  inputValue={(e) => setNewPassword(e)} /><br/>
          <TextInputComp fieldName="Confirm Password"  inputValue={(e) => setConfirmPassword(e)} /><br/>
          <SubmitInputComp value="Reset Password" /><br/>
        </form>
    </div>
    </div>
  );
}

export default ResetPasswordPage;
