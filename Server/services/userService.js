exports.isPasswordValid = (password) => {
    let passArr = password.split("");
    let upperCase = false;
    let passLength = false;

    if(password.length>=8){
       passLength = true;
    }
    passArr.forEach(letter => {
        if (letter.toUpperCase() === letter) {
            upperCase = true;
          }});
          
    return {upperCase : upperCase,passLength : passLength  };
};