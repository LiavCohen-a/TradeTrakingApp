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
    <div className="DataContainer FlexColumn ">
         <div className="DataContainer">
        <NavLinkComp
          linkValue="Update Details"
          linkRoute={"UpdateUser/" + user._id}
        />
        <NavLinkComp
          linkValue="ResetPassword"
          linkRoute="ResetPassword"
        />
      </div>
      <div >
        <Outlet />
      </div>
      <div className="DataContainer Border Margin Center">
        <div className="UserDataComp Border" >
          <b>Name</b> <br/>{user.firstName + " " + user.lastName} <br/>
          <b>Phone</b>  <br/> {user.phone ? '+927-' +user.phone.split("+927")[1] : ''}<br />
          <b>Email</b>  <br/> {user.email} 
          <br />
        </div>
        <div className="UserDataComp Border">
        <b>Start Margin</b>   <br/> {user.accountStartingPoint}$
          <br />
          <b>Total Current Margin</b> <br/>  {user.accountCurrentMargin}$
          <br />
          <b>Created Date</b>  <br/>  {user.createdAt ? user.createdAt.split('T')[0] : ''}
          <br />
        </div>
       
        <div className="UserDataComp Border">
        <b>User PNL $</b>  <br/>{user.accountStartingPoint - user.accountCurrentMargin}
          <br /><b>Security Question</b>  <br/>{question.question}
          <br />
          <b>Answer</b>   <br/>{user.userSecurityQuestion ? user.userSecurityQuestion.userAnswer : ''}
          <br />
        </div>
      </div>
   <br/><br/>
    </div>
  );
}

export default DashboardPage;
