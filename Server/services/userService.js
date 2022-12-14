exports.isPasswordValid = (password) => {
  let passArr = password.split("");
  let upperCase = false;
  let passLength = false;

  if (password.length >= 8) {
    passLength = true;
  }
  passArr.forEach((letter) => {
    if (letter.toUpperCase() === letter) {
      if (letter < 0 || letter > 0) {
      } else {
        upperCase = true;
      }
    }
  });

  return { upperCase: upperCase, passLength: passLength };
};

exports.isUserExist = (user, userData) => {
   
  if (user === null) {
    return false;
  } else {
    if (user.password === userData.password && user.email === userData.email) {
        
      return true;
    } else {
      return false;
    }
  }
};
exports.emailUserFix = (newUserData) => {
  let arrMail = newUserData.email.split("");
  let fixedMail = arrMail.map((x) => x.toLowerCase());
  return fixedMail.join("");
};
