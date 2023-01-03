// Modules
import { useEffect, useState } from "react";
import securityQuestionsService from "../../Services/securityQuestionsService";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

// Css
import "../../Css/Shared.css";

function QuestionDropBoxComp(props) {
  const [questions, setQuestions] = useState([]);
  const [userQ, setUserQ] = useState({});
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    let resp = await securityQuestionsService.getAllQuestions();
    setQuestions(resp);
  };
  return (
  <div className="InputContainer ">
    <DropdownButton variant={'outline-secondary'} title={userQ.question ? userQ.question : 'Choose Question'}>
    {questions.map((q) => {
        return (
          <Dropdown.Item  onClick={()=> {
            props.inputValue(q._id)
            setUserQ(q)}
          } key={q._id} value={q._id} >{q.question}</Dropdown.Item>
        );
      })}
   </DropdownButton>
    </div>
  );
}

export default QuestionDropBoxComp;
