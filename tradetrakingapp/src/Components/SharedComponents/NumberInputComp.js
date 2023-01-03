// Modules
import { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';

// Css
import "../../Css/Shared.css";

function NumberInputComp(props) {
  const [fieldValue, setFieldValue] = useState("");
  useEffect(() => {}, []);
  return (
    <div className="InputContainer">
        <Form.Group>
        <Form.Control  className="InputContainer" value={fieldValue} placeholder={props.fieldName} type="number"  onChange={(e) => {
          setFieldValue(e.target.value);
          props.inputValue(e.target.value);
        }} />
        </Form.Group>
    </div>
  );
}

export default NumberInputComp;
