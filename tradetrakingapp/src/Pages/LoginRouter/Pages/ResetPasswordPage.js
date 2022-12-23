import TextInputComp from "../../../Components/SharedComponents/TextInputComp";
import SubmitInputComp from "../../../Components/SharedComponents/SubmitInputComp";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import userService from "../../../Services/userService";

function ResetPasswordPage() {
  const navigate = useNavigate();
  const {id} = useParams();

  const [newPassword,setNewPassword] = useState("");
  const [passwordConfirm,setConfirmPassword] = useState("");
  const [repErr, setResponseErr] = useState("");

  const resetPassword =async (e,newPassword) => {
    e.preventDefault() 
    let resp = await userService.resetPassword(id,newPassword);
    if(resp.includes("Successfully")){
      alert('Your password was successfully reset !')
      navigate('/')
    }else{
     setResponseErr(resp)
    }
  }
  return (
    <div className="LoginPage">
    <div className="LoginForm">
        <form onSubmit={(e) => resetPassword(e,{newPassword,passwordConfirm})} >
          <TextInputComp fieldName="New Password"  inputValue={(e) => setNewPassword(e)} /><br/>
          <TextInputComp fieldName="Confirm Password"  inputValue={(e) => setConfirmPassword(e)} /><br/>
          <SubmitInputComp value="Reset Password" /><br/>
        </form>
        
    </div>
    {repErr}
    </div>
  );
}

export default ResetPasswordPage;
