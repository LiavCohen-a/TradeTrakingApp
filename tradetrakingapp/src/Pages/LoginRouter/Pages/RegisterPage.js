// Components
import QuestionDropBoxComp from "../../../Components/SharedComponents/QuestionDropBoxComp";
import NumberInputComp from "../../../Components/SharedComponents/NumberInputComp";
import SubmitInputComp from "../../../Components/SharedComponents/SubmitInputComp";
import EmailInputComp from "../../../Components/SharedComponents/EmailInputComp";
import LoginLinkComp from "../../../Components/LoginRegisterComps/LoginLinkComp";
import RespPopUpComp from "../../../Components/SharedComponents/RespPopUpComp";
import TextInputComp from "../../../Components/SharedComponents/TextInputComp";

// Modules
import userService from "../../../Services/userService";
import { useNavigate } from "react-router";
import { useState } from "react";

// Css
import "../../../Css/LoginRegister.css";

function RegisterPage() {
  const navigate = useNavigate();

  const [firstName, setFirst] = useState("");
  const [lastName, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [accountStartingPoint, setStartingPoint] = useState(undefined);
  const [userQuestionID, setUserQuestion] = useState("");
  const [userAnswer, setAnswer] = useState("");
  const [password, setPassword] = useState("");
  const [repErr, setResponseErr] = useState("");

  const userRegister = async (e, newUserData) => {
    e.preventDefault();
    let resp = await userService.registrationRequest(newUserData);
    if (resp._id === undefined) {
      setResponseErr(resp);
    } else {
      alert( "Welcome " + newUserData.firstName + " your user was successfully created !"  );
      navigate("/");
    }
  };
  return (
    <div className="">
      <div className="LoginForm">
        <form
          onSubmit={(e) =>
            userRegister(e, {
              firstName,
              lastName,
              email,
              phone,
              accountStartingPoint,
              password,
              userSecurityQuestion: {
                userQuestionID,
                userAnswer,
              },
            })
          }
        >
          <div className="InputContainer">
            <TextInputComp
              fieldName="First Name"
              inputValue={(e) => setFirst(e)}
            />
            <TextInputComp
              fieldName="Last Name"
              inputValue={(e) => setLast(e)}
            />
            <EmailInputComp fieldName="Email" inputValue={(e) => setEmail(e)} />
          </div>
          <div className="InputContainer">
            <TextInputComp fieldName="Phone" inputValue={(e) => setPhone(e)} />
            <NumberInputComp
              fieldName="Starting Point (USD)"
              inputValue={(e) => setStartingPoint(e)}
            />
          </div>
          <div className="InputContainer">
            <QuestionDropBoxComp inputValue={(e) => setUserQuestion(e)} />
            <TextInputComp
              fieldName="Answer"
              inputValue={(e) => setAnswer(e)}
            />
            <TextInputComp
              fieldName="Password"
              inputValue={(e) => setPassword(e)}
            />
          </div>
          <RespPopUpComp value={repErr} />
          <br />
          <SubmitInputComp value="Register" />
        </form>
        <br />
        <LoginLinkComp />
      </div>
    </div>
  );
}

export default RegisterPage;
