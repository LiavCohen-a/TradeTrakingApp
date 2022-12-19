import ForgotPasswordComp from "../../../Components/LoginRegisterComps/ForgotPasswordComp";
import SignUpComp from "../../../Components/LoginRegisterComps/SignUpComp";
function LoginPage() {
    return (
      <div className="App">
        User Email : <br/>
        Password : 
        <ForgotPasswordComp />
        <input type="submit" value={'Login'} /><br/>
        <SignUpComp/>
      </div>
    );
  }
  
export default LoginPage;
  