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
    console.log(storageData.loginUser.data.userSecurityQuestion)

    let question = await securityQuestionsService.getQuestion(storageData.loginUser.data.userSecurityQuestion._id)
    console.log(question)
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
        hey {user.firstName + " " + user.lastName}, Here is your details :
      </h5>
      <div className="DataContainer">
        <div className="UserDataComp">
          Email : {user.email} <br />
          Phone : {user.phone}
          <br />
          Created Date : {storageData.loginUser.data.createdAt.split('T')[0]}
          <br />
        </div>
        <div className="UserDataComp">
          Start Margin : {user.accountStartingPoint}
          <br />
          Total Current Margin : {user.accountCurrentMargin}
          <br />
          Days From Start : {}
          <br />
        </div>
        <div className="UserDataComp">
          PNL % : {(user.accountCurrentMargin /user.accountStartingPoint) * 100 -100 + "%"}
          <br />
          Total Profit/Loss (USD) : {pnl + (user.accountStartingPoint - user.accountCurrentMargin) }$ <br />
          Transactions : {storageData.transactions.length}
          <br />
        </div>
        <div className="UserDataComp">
          Security Question :{" "}
          {console.log(storageData.loginUser.data.userSecurityQuestion)}{" "}
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
