// Modules
import { useEffect, useState } from "react";

// Css
import "../../Css/Shared.css";

function QuestionDropBoxComp(props) {
  const [fieldValue, setFieldValue] = useState("");
  useEffect(() => {
    setFieldValue(props.fieldValue);
  }, []);
  return (
    <div className="InputContainer">
        <select>
            
        </select>
      <input
        className="Input"
        type={""}
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

export default QuestionDropBoxComp;
