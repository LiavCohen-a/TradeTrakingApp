// Components
import NavigationBarComp from "../../Components/SharedComponents/Navigation/NavigationBarComp";
import DashboardPage from "./Pages/DashboardPage";
import PositionsPage from "./Pages/PositionsPage";
import PositionPage from "./Pages/Position/PositionPage";
import StatisticsPage from "./Pages/StatisticsPage";
import TransactionsPage from "./Pages/TransactionsPage";
import HomePage from "./Pages/HomePage";

// Modules
import { Routes, Route } from "react-router-dom";
import ResetPasswordComp from "./Pages/Dashboard/ResetPasswordComp";
import UpdateUserComp from "./Pages/Dashboard/UpdateUserComp";
import AddPositionComp from "./Pages/Position/AddPositionComp";
import AddTransactionComp from "./Pages/Transaction/AddTransactionComp";

// Css

function HomeRouterComp() {
  return (
    <div className="HomeContainer">
      <div>
        <NavigationBarComp />
      </div>
      <div className="RouteContainer">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Dashboard" element={<DashboardPage />}>
            <Route path="updateUser/:id" element={<UpdateUserComp />} />
            <Route path="resetPassword" element={<ResetPasswordComp />} />
          </Route>
          <Route path="/Positions" element={<PositionsPage />}>
            <Route path="addPosition/:id" element={<AddPositionComp />} />
          </Route>
          <Route path="/position/:id" element={<PositionPage />} />
          <Route path="/Statistics" element={<StatisticsPage />} />
          <Route path="/Transactions" element={<TransactionsPage />}>
            <Route path="deposit" element={<AddTransactionComp transactionType="Deposit" />}/>
            <Route path="withdrawal" element={<AddTransactionComp transactionType="Withdrawal" />}/>
            <Route path="transfer" element={<AddTransactionComp transactionType="Transfer" />}/>
          </Route>
        </Routes>
      </div>
      <div></div>
    </div>
  );
}

export default HomeRouterComp;
