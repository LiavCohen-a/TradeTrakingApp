// Css
import "../../Css/Shared.css";

function SubmitInputComp(props) {
  return (
      <input className="Submit" type={"submit"} value={props.value} />
  );
}

export default SubmitInputComp;
