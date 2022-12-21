// Components

import ButtonInputComp from "../../../../Components/SharedComponents/ButtonInputComp";
import SubmitInputComp from "../../../../Components/SharedComponents/SubmitInputComp";
import TextInputComp from "../../../../Components/SharedComponents/TextInputComp";


// Modules

// Css

function UpdateUserComp() {
  return (
    <div  className='FlexColumn'>
        <div className='DataContainer Center'>
        <div className='UserDataComp'>
          <ButtonInputComp value="Cancel" />

        </div>
        <div className='UserDataComp'>
        <TextInputComp fieldName="First Name"/>
        <TextInputComp fieldName="Last Name"/>
        <TextInputComp fieldName="Email"/>


        </div>
        <div className='UserDataComp'>

          <TextInputComp fieldName="Phone"/>
        <TextInputComp fieldName="Security Question"/>
        <TextInputComp fieldName="Answer "/>
        </div>
     
        <div className='UserDataComp'>
          <SubmitInputComp value="Update" />
        </div>
      </div>
    </div>
  );
}

export default UpdateUserComp;
