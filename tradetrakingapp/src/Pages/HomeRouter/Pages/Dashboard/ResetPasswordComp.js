// Components

import ButtonInputComp from "../../../../Components/SharedComponents/ButtonInputComp";
import SubmitInputComp from "../../../../Components/SharedComponents/SubmitInputComp";
import TextInputComp from "../../../../Components/SharedComponents/TextInputComp";


// Modules

// Css

function ResetPasswordComp() {
  return (
    <div className="FormDataContainer Margin">
        <div className="InputContainer">
            <ButtonInputComp value="Cancel" />
        </div>
            <div  className='Margin'>
                <TextInputComp fieldName="New Password" />
                <TextInputComp fieldName="Confirm Password"  />
            </div>
        <div className="InputContainer">
            <SubmitInputComp value="Update" />
        </div>
    </div>
  );
}

export default ResetPasswordComp;
