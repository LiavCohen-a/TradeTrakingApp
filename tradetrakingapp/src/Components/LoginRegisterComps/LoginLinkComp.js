// Modules
import { Link } from "react-router-dom";
function SignUpComp(props) {
  return (
    <div>
      {
        props.forgot ? "Remember your password ?": "Have you registered before ?"
      }<Link to={"/"}>Login now!</Link>
     
    </div>
  );
}

export default SignUpComp;
