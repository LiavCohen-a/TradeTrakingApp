import "../../Css/Shared.css";
import Alert from 'react-bootstrap/Alert';

function ErrorRespComp(props) {
  return (
    props.value ? 
    <Alert variant={'dark'}>
          {props.value}
    </Alert> 
    : ""
  );
}

export default ErrorRespComp;
