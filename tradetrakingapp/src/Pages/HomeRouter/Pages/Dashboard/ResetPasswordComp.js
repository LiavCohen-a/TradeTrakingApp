// Components
import ButtonInputComp from "../../../../Components/SharedComponents/ButtonInputComp";
import SubmitInputComp from "../../../../Components/SharedComponents/SubmitInputComp";
import TextInputComp from "../../../../Components/SharedComponents/TextInputComp";
import ErrorRespComp from "../../../../Components/SharedComponents/ErrorRespComp";

// Modules
import userService from "../../../../Services/userService";
import { useNavigate } from "react-router";
import { useState } from "react";
import { useSelector } from "react-redux";

// Css

function ResetPasswordComp() {
  const storageData = useSelector((state) => state);
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState("");
  const [passwordConfirm, setConfirmPassword] = useState("");
  const [repErr, setResponseErr] = useState("");

  const setUpNewPassword = async (e, obj) => {
    e.preventDefault();
    let resp = await userService.resetPassword(
      storageData.loginUser.data._id,
      obj
    );
    if (resp.includes("successfully")) {
      alert(resp);
      navigate("/dashboard");
    } else {
      setResponseErr(resp);
    }
  };

  return (
    <div>
      {repErr ? (
        <div className=" FormDataContainer">
          <ErrorRespComp value={repErr} />
        </div>
      ) : (
        ""
      )}

      <form
        className="FormDataContainer Margin"
        onSubmit={(e) => setUpNewPassword(e, { newPassword, passwordConfirm })}
      >
        <div className="InputContainer">
          <ButtonInputComp
            callBack={(e) => {
              navigate("/dashboard");
            }}
            value="Cancel"
          />
        </div>

        <div className="Margin">
          <TextInputComp
            fieldName="New Password"
            inputValue={(e) => setNewPassword(e)}
          />
          <TextInputComp
            fieldName="Confirm Password"
            inputValue={(e) => setConfirmPassword(e)}
          />
        </div>
        <div className="InputContainer">
          <SubmitInputComp value="Update" />
        </div>
      </form>
    </div>
  );
}

export default ResetPasswordComp;
