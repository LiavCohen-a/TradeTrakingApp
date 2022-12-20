// Modules
import { useEffect, useState } from "react";

// Css
import "../../Css/Shared.css";

function EmailInputComp(props) {
  const [fieldValue, setFieldValue] = useState("");
  useEffect(() => {
    setFieldValue(props.fieldValue);
  }, []);
  return (
    <div className="InputContainer">
      <input
        className="Input"
        type={"email"}
        placeholder={props.fieldName}
        value={fieldValue ? fieldValue : ""}
        onChange={(e) => {
          setFieldValue(e.target.value);
          props.inputValue(e.target.value);
        }}
      />
    </div>
  );
}

export default EmailInputComp;
