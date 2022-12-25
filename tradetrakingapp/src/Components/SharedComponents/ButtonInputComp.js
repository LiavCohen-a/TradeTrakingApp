// Css
import "../../Css/Shared.css";

function ButtonInputComp(props) {
  return (
    <div>
      <input
        onClick={() => props.callBack(props.value)}
        className="Submit"
        type={"button"}
        value={props.value}
      />
    </div>
  );
}

export default ButtonInputComp;
