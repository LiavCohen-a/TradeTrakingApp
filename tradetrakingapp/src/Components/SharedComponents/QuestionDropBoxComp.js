// Modules
import { useEffect, useState } from "react";
import securityQuestionsService from "../../Services/securityQuestionsService";

// Css
import "../../Css/Shared.css";

function QuestionDropBoxComp(props) {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  let getData = async () => {
    let resp = await securityQuestionsService.getAllQuestions();
    setQuestions(resp);
  };
  return (
    <select
      onChange={(e) => {
        props.inputValue(e.target.value);
      }}
      className="InputContainer SelectContainer "
    >
      <option value={null}>Choose Question</option>
      {questions.map((q) => {
        return (
          <option key={q._id} value={q._id}>
            {" "}
            {q.question}
          </option>
        );
      })}
    </select>
  );
}

export default QuestionDropBoxComp;
