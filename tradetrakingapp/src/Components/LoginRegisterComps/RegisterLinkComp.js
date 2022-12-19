// Modules
import { Link } from "react-router-dom";
function RegisterLinkComp() {
  return (
    <div>
      Not a member ? <Link to={"/Register"}>Register now!</Link>
    </div>
  );
}

export default RegisterLinkComp;
