// Modules
import { useEffect, useState } from "react";

// Css
import "../../Css/Inputs.css";

function NumberInputComp(props) {
  const [fieldValue, setFieldValue] = useState();
  useEffect(() => {
    setFieldValue(props.fieldValue);
  }, []);
  return (
    <div className="InputContainer">
      <input
        className="Input"
        type={'number'}
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
