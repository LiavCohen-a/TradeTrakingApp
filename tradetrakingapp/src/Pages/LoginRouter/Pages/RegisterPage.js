// Components
import ForgotPasswordComp from "../../../components/LoginRegisterComps/ForgotPasswordComp";
import SubmitInputComp from "../../../components/SharedComponents/SubmitInputComp";
import TextInputComp from "../../../components/SharedComponents/TextInputComp";
import EmailInputComp from "../../../components/SharedComponents/EmailInputComp";
import NumberInputComp from "../../../components/SharedComponents/NumberInputComp";
import LoginLinkComp from "../../../components/LoginRegisterComps/LoginLinkComp";

// Modules
import { useState } from "react";

// Css
import "../../../Css/LoginRegister.css";

function RegisterPage() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [startingPoint, setStartingPoint] = useState("");
  const [securityQuestion, setSecurityQuestion] = useState("");
  const [answerQuestion, setAnswer] = useState("");
  const [password, setPassword] = useState("");

  const userRegister = (e, newUserData) => {
    e.preventDefault();
  };
  return (
    <div className="App">
      <div className="FormContainer LoginForm">
        <form
          onSubmit={(e) =>
            userRegister(e, {
              first,
              last,
              email,
              phone,
              startingPoint,
              securityQuestion,
              answerQuestion,
              password,
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
              inputValue={(e) => setSecurityQuestion(e)}
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
