// Css
import "../../Css/Shared.css";

function SubmitInputComp(props) {
  return (
    <div>
      <input className="Submit" type={"submit"} value={props.value} />
    </div>
  );
}

export default SubmitInputComp;
