// Components
import NavLinkComp from "../../../Components/SharedComponents/Navigation/NavLinkComp";

// Modules
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
// Css
import "../../../Css/Dashboard.css";
import "../../../Css/Mobile.css";

function DashboardPage() {
  const storageData = useSelector((state) => state);
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(storageData.loginUser.data);
  }, []);
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
          Created Date : {user.createdAt}
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
          PNL% : {(user.accountStartingPoint - user.accountCurrentMargin) / 100}
          <br />
          Total Profit/Loss :{" "}
          {user.accountStartingPoint - user.accountCurrentMargin} <br />
          Transactions : {storageData.transactions.length}
          <br />
        </div>
        <div className="UserDataComp">
          Security Question :{" "}
          {storageData.loginUser.data.userSecurityQuestion.userQuestionID}{" "}
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
