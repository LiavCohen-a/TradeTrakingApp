import NavLinkComp from '../../../Components/SharedComponents/Navigation/NavLinkComp';
import '../../../Css/Dashboard.css'
function DashboardPage() {
 
  return (
    <div className="DataContainer FlexColumn">
      <h5>hey name, Here is your details :</h5>
      <div className='DataContainer'>
        <div>
          Email : <br/>
          Phone : <br/>
          Created Date : <br/>
        </div>
        <div>
          Start Margin : <br/>
          Total Current Margin : <br/>
          Days From Start : <br/>
        </div>
        <div>
          PNL% : <br/>
          Total Profit/Loss : <br/>
          Transactions : <br/>
        </div>
        <div>
          Security Question :  <br/>
          Answer : <br/>
        </div>
      </div>
      <div className='DataContainer'>
        <NavLinkComp linkValue="Update Details" linkRoute="/UpdateDetails" />
        <NavLinkComp linkValue="ResetPassword" linkRoute="/ResetPassword"  />
      </div>
    </div>
  );
}

export default DashboardPage;
