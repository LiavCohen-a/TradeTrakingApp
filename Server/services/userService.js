exports.isPasswordValid = (password) => {
  if (password) {
    let passArr = password.split("");

    let upperCase = false;
    let passLength = false;

    if (password.length >= 8) {
      passLength = true;
    }
    passArr.forEach((letter) => {
      if (letter.toUpperCase() === letter) {
        if (letter <= 0 || letter > 0) {
        } else {
          upperCase = true;
        }
      } else {
      }
    });

    return { upperCase: upperCase, passLength: passLength };
  }
  return { upperCase: true, passLength: true };
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
exports.emailUserFix = (UserData) => {
  let arrMail = UserData.email.split("");
  let fixedMail = arrMail.map((x) => x.toLowerCase());
  return fixedMail.join("");
};

exports.fixUserPhone = (number) => {
  let arrPhone = number.split("");
  let index = 0;
  let fixedPhone = arrPhone.map((x) => {
    if (index == 0 && x == "0") {
      index = index + 1;
      return "+927";
    } else {
      return x;
    }
  });
  return fixedPhone.join("");
};
