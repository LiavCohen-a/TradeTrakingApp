// Modules
import { Link } from "react-router-dom";
function RegisterLinkComp() {
  return (
    <div className="Center">
      Not a member ? <Link to={"/Register"}>Register now!</Link>
    </div>
  );
}

export default RegisterLinkComp;
