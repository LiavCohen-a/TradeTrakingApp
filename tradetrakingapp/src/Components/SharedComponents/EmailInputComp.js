// Modules
import { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';

// Css
import "../../Css/Shared.css";

function EmailInputComp(props) {
  const [fieldValue, setFieldValue] = useState("");
  useEffect(() => {
    setFieldValue(props.fieldValue);
  }, []);
  return (
    <div className="InputContainer">
       <Form.Group controlId="formBasicEmail">
        <Form.Control  className="InputContainer" placeholder={props.fieldName} value={fieldValue ? fieldValue : ""} type="email" onChange={(e) => {
          setFieldValue(e.target.value);
          props.inputValue(e.target.value);
        }} />
        </Form.Group>
    </div>
  );
}

export default EmailInputComp;
