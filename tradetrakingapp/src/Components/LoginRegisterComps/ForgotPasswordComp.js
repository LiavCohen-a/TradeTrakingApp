// Modules
import { Link } from "react-router-dom";

// Css
import "../../Css/LoginRegister.css";
function ForgotPasswordComp() {
  return (
    <div>
      <Link className="Link" to={"/ForgotPassword"}>
        Forgot password ?
      </Link>
    </div>
  );
}

export default ForgotPasswordComp;
