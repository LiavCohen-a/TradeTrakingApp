// Components
import SubmitInputComp from "../../../Components/SharedComponents/SubmitInputComp";
import TextInputComp from "../../../Components/SharedComponents/TextInputComp";
import EmailInputComp from "../../../Components/SharedComponents/EmailInputComp";
import NumberInputComp from "../../../Components/SharedComponents/NumberInputComp";
import LoginLinkComp from "../../../Components/LoginRegisterComps/LoginLinkComp";

// Modules
import { useState } from "react";

// Css
import "../../../Css/LoginRegister.css";
import userService from "../../../Services/userService";

function RegisterPage() {
  const [firstName, setFirst] = useState("");
  const [lastName, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [accountStartingPoint, setStartingPoint] = useState("");
  const [userQuestionID, setuserQuestion] = useState("");
  const [userAnswer, setAnswer] = useState("");
  const [password, setPassword] = useState("");

  const userRegister =async (e, newUserData) => {
    e.preventDefault();
    let resp = await userService.registrationRequest(newUserData)
  };
  return (
    <div className="App">
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
              userSecurityQuestion:{
                userQuestionID,
                userAnswer
              }
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
            <TextInputComp
              fieldName="Security Question"
              inputValue={(e) => setuserQuestion(e)}
            />
            <TextInputComp
              fieldName="Answer"
              inputValue={(e) => setAnswer(e)}
            />
            <TextInputComp
              fieldName="Password"
              inputValue={(e) => setPassword(e)}
            />
          </div>
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
