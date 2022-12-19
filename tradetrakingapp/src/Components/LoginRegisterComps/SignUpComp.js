// Modules
import { Link } from "react-router-dom";
function SignUpComp() {
  return (
    <div>
      Not a member ? <Link to={"/SignUp"}>Sign Up now!</Link>
    </div>
  );
}

export default SignUpComp;
