// Modules
import { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';

// Css
import "../../Css/Shared.css";

function PasswordInputComp(props) {

  return (
    <div className="InputContainer">
       <Form.Group>
        <Form.Control  className="InputContainer" placeholder={'Password'} type="password" onChange={(e) => {
          props.inputValue(e.target.value);
        }} />
        </Form.Group>
    </div>
  );
}

export default PasswordInputComp;
