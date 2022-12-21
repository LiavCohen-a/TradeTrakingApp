// Components

// Modules
import {Link } from "react-router-dom";

// Css

function NavLinkComp(props) {
  return (
    <div >
      <div>
        <Link className={"Link  "+props.className} to={props.linkRoute}>
          {props.linkValue}
        </Link>
      </div>
    </div>
  );
}

export default NavLinkComp;
