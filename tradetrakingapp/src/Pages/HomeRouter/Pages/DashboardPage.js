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
  }

  let pnl;
  if(user.accountStartingPoint > user.accountCurrentMargin){
    pnl = "-"
  }else{
    pnl = "+"
  }

  return (
    <div className="DataContainer FlexColumn">
      <h5>
        hey {storageData.loginUser.data.firstName + " " + storageData.loginUser.data.lastName}, Here is your details :
      </h5>
      <div className="DataContainer">
        <div className="UserDataComp">
          Email : {storageData.loginUser.data.email} <br />
          Phone : {'+927-' +storageData.loginUser.data.phone.split("+927")[1]}
          <br />
          Created Date : {storageData.loginUser.data.createdAt.split('T')[0]}
          <br />
        </div>
        <div className="UserDataComp">
          Start Margin : {storageData.loginUser.data.accountStartingPoint}$
          <br />
          Total Current Margin : {storageData.loginUser.data.accountCurrentMargin}$
          <br />
          Days From Start : {}
          <br />
        </div>
        <div className="UserDataComp">
          PNL % : {(storageData.loginUser.data.accountCurrentMargin /storageData.loginUser.data.accountStartingPoint) * 100 -100 + "%"}
          <br />
          Total Profit/Loss (USD) : {pnl +" " +(storageData.loginUser.data.accountStartingPoint - storageData.loginUser.data.accountCurrentMargin) }$ <br />
          Transactions : {storageData.transactions.length}
          <br />
        </div>
        <div className="UserDataComp">
          Security Question :{question.question}
          <br />
          Answer : {storageData.loginUser.data.userSecurityQuestion.userAnswer}
          <br />
        </div>
      </div>
      <div className="DataContainer">
        <NavLinkComp
          className="RouterInput"
          linkValue="Update Details"
          linkRoute={"UpdateUser/" + storageData.loginUser.data._id}
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
