// Css
import "../../Css/Shared.css";
import Button from 'react-bootstrap/Button';

function ButtonInputComp(props) {
  return (
    <div>
         <Button onClick={() => props.callBack()} className="InputBorder Link " type={"button"} variant="secondary">{props.value}</Button>
    </div>

  );
}

export default ButtonInputComp;
