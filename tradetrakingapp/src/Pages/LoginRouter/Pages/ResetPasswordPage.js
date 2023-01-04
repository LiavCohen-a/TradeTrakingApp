// Components
import SubmitInputComp from "../../../Components/SharedComponents/SubmitInputComp";
import ErrorRespComp from "../../../Components/SharedComponents/ErrorRespComp";

// Modules
import userService from "../../../Services/userService";
import { useNavigate, useParams } from "react-router";
import { useState } from "react";
import PasswordInputComp from "../../../Components/SharedComponents/PasswordInputComp";

// Css
function ResetPasswordPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [newPassword, setNewPassword] = useState("");
  const [passwordConfirm, setConfirmPassword] = useState("");
  const [repErr, setResponseErr] = useState("");

  const resetPassword = async (e, newPassword) => {
    e.preventDefault();
    let resp = await userService.resetPassword(id, newPassword);
    if (resp.includes("Successfully")) {
      alert("Your password was successfully reset !");
      navigate("/");
    } else {
      setResponseErr(resp);
    }
  };
  return (
    <div className="Center">
      <div>
        <form onSubmit={(e) => resetPassword(e, { newPassword, passwordConfirm })} >
          <PasswordInputComp fieldName="New Password" inputValue={(e) => setNewPassword(e)}/>
          <br />
          <PasswordInputComp fieldName="Confirm Password" inputValue={(e) => setConfirmPassword(e)}/>
          <br />
          <SubmitInputComp value="Reset Password" />
          <br />
        </form>
      </div>
      <ErrorRespComp value={repErr}/> 
    </div>
  );
}

export default ResetPasswordPage;
