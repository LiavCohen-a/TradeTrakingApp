// Components
import Button from 'react-bootstrap/Button';

// Modules
import {Link } from "react-router-dom";

// Css

function NavLinkComp(props) {
  return (
    <div >
    
        <Link style={{textDecoration:'none'}} to={props.linkRoute}>
          <Button   className={"Link Submit  "+props.className} variant="outline-secondary">{props.linkValue}</Button>
        </Link>
      
    </div>
  );
}

export default NavLinkComp;
