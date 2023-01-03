import Button from 'react-bootstrap/Button';

// Css
import "../../Css/Shared.css";

function SubmitInputComp(props) {
  return <Button  className="Submit" type={"submit"} variant="secondary">{props.value}</Button>;
}

export default SubmitInputComp;
