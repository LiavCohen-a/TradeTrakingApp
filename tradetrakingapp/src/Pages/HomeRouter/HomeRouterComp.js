// Components
import NavigationBarComp from '../../Components/SharedComponents/Navigation/NavigationBarComp';
import DashboardPage from './Pages/DashboardPage';
import PositionsPage from './Pages/PositionsPage';
import StatisticsPage from './Pages/StatisticsPage';
import TransactionsPage from './Pages/TransactionsPage';
import HomePage from './Pages/HomePage';

// Modules
import { Routes, Route, Link } from "react-router-dom";

// Css

function HomeRouterComp() {
  return (
    <div  className='HomeContainer'>
        <div>
        <NavigationBarComp />
        </div>
        <div className='RouteContainer'>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Dashboard" element={<DashboardPage />} />
            <Route path="/Positions" element={<PositionsPage />} />
            <Route path="/Statistics" element={<StatisticsPage />} />
            <Route path="/Transactions" element={<TransactionsPage />} />
        </Routes>
        </div>
     
        
    </div>
  );
}

export default HomeRouterComp;
