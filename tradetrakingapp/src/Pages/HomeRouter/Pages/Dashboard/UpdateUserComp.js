// Components
import ButtonInputComp from "../../../../Components/SharedComponents/ButtonInputComp";
import QuestionDropBoxComp from "../../../../Components/SharedComponents/QuestionDropBoxComp";
import SubmitInputComp from "../../../../Components/SharedComponents/SubmitInputComp";
import TextInputComp from "../../../../Components/SharedComponents/TextInputComp";

// Modules
import userService from "../../../../Services/userService";
import { useNavigate, useParams } from "react-router";
import { useState } from "react";
import { useDispatch } from "react-redux";


// Css

function UpdateUserComp() {
  const navigate = useNavigate();
  const {id} = useParams();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [userQuestionID, setUserSecurityQuestion] = useState("");
  const [userAnswer, setUserAnswer] = useState("");
  

  const updateUser =async (e,userNewData) => {
    e.preventDefault();
    let resp =await userService.updateUser(id,userNewData)
    alert(resp);
    navigate('/dashboard')
    window.location.reload()
  };
  return (
    <div className="FlexColumn">
      <form
        onSubmit={(e) =>
          updateUser(e, {
            firstName,
            lastName,
            email,
            phone,
            userSecurityQuestion: { userQuestionID, userAnswer },
          })
        }
      >
        <div className="FlexCenter Center">
          <div >
            <ButtonInputComp
              callBack={(e) => {
                navigate("/dashboard");
              }}
              value="Cancel"
            />
          </div>

          <div >
            <TextInputComp
              inputValue={(e) => setFirstName(e)}
              fieldName="First Name"
            />
            <TextInputComp
              inputValue={(e) => setLastName(e)}
              fieldName="Last Name"
            />
            <TextInputComp inputValue={(e) => setEmail(e)} fieldName="Email" />
          </div>
          <div >
            <TextInputComp inputValue={(e) => setPhone(e)} fieldName="Phone" />
            <QuestionDropBoxComp
              inputValue={(e) => setUserSecurityQuestion(e)}
            />
            <TextInputComp
              inputValue={(e) => setUserAnswer(e)}
              fieldName="Answer "
            />
          </div>

          <div >
            <SubmitInputComp value="Update" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default UpdateUserComp;
