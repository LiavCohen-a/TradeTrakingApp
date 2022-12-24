// Modules
import { useEffect, useState } from "react";

// Css
import "../../Css/Shared.css";

function NumberInputComp(props) {
  const [fieldValue, setFieldValue] = useState("");
  useEffect(() => {}, []);
  return (
    <div className="InputContainer">
      <input
        className="Input"
        type={"number"}
        placeholder={props.fieldName}
        value={fieldValue}
        onChange={(e) => {
          setFieldValue(e.target.value);
          props.inputValue(e.target.value);
        }}
      />
    </div>
  );
}

export default NumberInputComp;
