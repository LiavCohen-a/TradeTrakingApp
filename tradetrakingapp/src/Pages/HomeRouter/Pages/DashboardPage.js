import NavLinkComp from '../../../Components/SharedComponents/Navigation/NavLinkComp';
import '../../../Css/Dashboard.css'
import '../../../Css/Mobile.css'
import { Outlet, Route, Routes, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import UpdateUserComp from './Dashboard/UpdateUserComp';
import ResetPasswordComp from './Dashboard/ResetPasswordComp';


function DashboardPage() {
  useEffect(() => {
  },[])
  return (
    <div className="DataContainer FlexColumn">
      <h5>hey name, Here is your details :</h5>
      <div className='DataContainer'>
        <div className='UserDataComp'>
          Email : <br/>
          Phone : <br/>
          Created Date : <br/>
        </div>
        <div className='UserDataComp'>
          Start Margin : <br/>
          Total Current Margin : <br/>
          Days From Start : <br/>
        </div>
        <div className='UserDataComp'>
          PNL% : <br/>
          Total Profit/Loss : <br/>
          Transactions : <br/>
        </div>
        <div className='UserDataComp'>
          Security Question :  <br/>
          Answer : <br/>
        </div>
      </div>
      <div className='DataContainer'>
        <NavLinkComp className="RouterInput" linkValue="Update Details" linkRoute="UpdateUser" />
        <NavLinkComp className="RouterInput" linkValue="ResetPassword" linkRoute="ResetPassword"  />
      </div>
      <div className='Margin' >
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardPage;
