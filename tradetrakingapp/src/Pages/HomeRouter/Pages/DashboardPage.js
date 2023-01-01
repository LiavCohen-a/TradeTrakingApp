// Components
import NavLinkComp from "../../../Components/SharedComponents/Navigation/NavLinkComp";

// Modules
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
// Css
import "../../../Css/Dashboard.css";
import "../../../Css/Mobile.css";
import securityQuestionsService from "../../../Services/securityQuestionsService";
import userService from "../../../Services/userService";

function DashboardPage() {
  const storageData = useSelector((state) => state);
  const [user, setUser] = useState({});
  const [question, setUserQuestion] = useState({});

  useEffect(() => {
    setUser(storageData.loginUser.data);
    getData()
  }, []);

  const getData =async () => {
    let question = await securityQuestionsService.getQuestion(storageData.loginUser.data.userSecurityQuestion.userQuestionID)
    setUserQuestion(question)
    let user = await userService.getUserData(storageData.loginUser.data._id)
    setUser(user)
  }

  let pnl;
  if(user.accountStartingPoint > user.accountCurrentMargin){
    pnl = "-"
  }else{
    pnl = "+"
  }

  return (
    <div className="DataContainer FlexColumn">
      <div className="DataContainer">
        <div className="UserDataComp">
          Full Name : {user.firstName + " " + user.lastName} <br/>
          Email : {user.email} <br />
          Phone : {user.phone ? '+927-' +user.phone.split("+927")[1] : ''}
          <br />
        </div>
        <div className="UserDataComp">
          Start Margin : {user.accountStartingPoint}$
          <br />
          Total Current Margin : {user.accountCurrentMargin}$
          <br />
          Created Date : {user.createdAt ? user.createdAt.split('T')[0] : ''}
          <br />
        </div>
       
        <div className="UserDataComp">
          Security Question :{question.question}
          <br />
          Answer : {user.userSecurityQuestion ? user.userSecurityQuestion.userAnswer : ''}
          <br />
        </div>
      </div>
      <div className="DataContainer">
        <NavLinkComp
          className="RouterInput"
          linkValue="Update Details"
          linkRoute={"UpdateUser/" + user._id}
        />
        <NavLinkComp
          className="RouterInput"
          linkValue="ResetPassword"
          linkRoute="ResetPassword"
        />
      </div>
      <div className="Margin">
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardPage;
