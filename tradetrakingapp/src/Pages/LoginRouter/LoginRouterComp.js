import {Routes,Route,Link} from 'react-router-dom';

import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import ForgotPasswordPage from './Pages/ForgotPasswordPage';
import SignUpPage from './Pages/SignUpPage';
import '../../Css/Shared.css'

function LoginRouterComp() {
    return (
      <div  className='LoginRouterComp' >
        <h5 style={{textAlign : 'center'}}>Welcome To The Trade Tracking App</h5>
        <div className='RouterLinkContainer'>
        <Link className='RouterInput' to={'/'}>Login</Link>
        <Link className='RouterInput' to={'/Register'}>Register</Link>
        </div>
        <Routes>
            <Route path='/' element={<LoginPage/>} />
            <Route path='/Register' element={<RegisterPage/>} />
            <Route path='/ForgotPassword' element={<ForgotPasswordPage/>} />
            <Route path='/SignUp' element={<SignUpPage/>} />
        </Routes>


      </div>
    );
  }
  
  export default LoginRouterComp;
  