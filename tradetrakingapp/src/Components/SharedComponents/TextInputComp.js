// Modules
import { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';

// Css
import "../../Css/Shared.css";

function TextInputComp(props) {
  const [fieldValue, setFieldValue] = useState("");
  useEffect(() => {
    setFieldValue(props.fieldValue);
  }, []);
  return (
    <div className="InputContainer">
        <Form.Group>
        <Form.Control  className="InputContainer" value={fieldValue ? fieldValue : ""} placeholder={props.fieldName} type={"text"}  onChange={(e) => {
          setFieldValue(e.target.value);
          props.inputValue(e.target.value);
        }} />
        </Form.Group>
    </div>
  );
}

export default TextInputComp;
