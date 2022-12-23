const usersBL = require("../models/userBL");
const securityQuestionBL = require("../models/securityQuestionBL");
const express = require("express");
const router = express.Router();
const userService = require("../services/userService");

router.route("/").get(async function (req, resp) {
  let data = await usersBL.GetAllUsers();
  return resp.json(data);
});

router.route("/:id").get(async function (req, resp) {
  let userID = req.params.id;
  let data = await usersBL.GetUserByID(userID);
  return resp.json(data);
});

router.route("/").post(async function (req, resp) {
  let newUserData = req.body;
  let isValid = userService.isPasswordValid(newUserData.password);
  let isUserEmailExist = await usersBL.GetUserByEmail(newUserData.email)
  if (isValid.upperCase && isValid.passLength) {
    let userPhoneFix = userService.fixUserPhone(newUserData.phone)
    let userEmail = userService.emailUserFix(newUserData);
    newUserData.email = userEmail;
    newUserData.phone = userPhoneFix;
    let data = await usersBL.AddUser(newUserData);
    return resp.json(data);
  } else {
    if(isUserEmailExist){
      return resp.json("User email registered !");
    }
    if (isValid.passLength) {
      return resp.json("User mast have a capital letter in his password !");
    } else {
      if (isValid.upperCase) {
        return resp.json("User mast have a 8 letter password minimum!");
      }
      return resp.json(
        "User mast have a capital letter in his password and 8 letter minimum !"
      );
    }
  }
});

router.route("/:id").put(async function (req, resp) {
  let userID = req.params.id;
  let newUserData = req.body;
  let userEmail = userService.emailUserFix(newUserData);
  newUserData.email = userEmail;
  let isValid = userService.isPasswordValid(newUserData.password);

  if (isValid.upperCase && isValid.passLength) {
    let data = await usersBL.UpdateUser(userID, newUserData);
    return resp.json(data);
  } else {
    if (isValid.passLength) {
      return resp.json("User mast have a capital letter in his password !");
    } else {
      if (isValid.upperCase) {
        return resp.json("User mast have a 8 letter password minimum!");
      }
      return resp.json(
        "User mast have a capital letter in his password and 8 letter minimum !"
      );
    }
  }
});
router.route("/:id").delete(async function (req, resp) {
  let userID = req.params.id;
  let data = await usersBL.DeleteUser(userID);
  return resp.json(data);
});

router.route("/login").post(async function (req, resp) {
  let userData = req.body;
  let userEmail = userService.emailUserFix(userData);
  let user = await usersBL.GetUserByEmail(userEmail);
  userData.email = userEmail;
  let isExist = userService.isUserExist(user, userData);
  if (isExist) {
    return resp.json(
      "Hey " + user.firstName + " You've logged in successfully!"
    );
  } else {
    return resp.json("The user email or password are invalid!");
  }
});

router.route("/forgotPasswordReset").post(async function (req, resp) {
  let userResetPasswordData = req.body;
  let userEmail = userService.emailUserFix(userResetPasswordData);
  userResetPasswordData.email = userEmail;
  let question = await securityQuestionBL.GetQuestionByID(
    userResetPasswordData.securityQuestionID
  );
  let user = await usersBL.GetUserByEmail(userEmail);
  if(user === null)
  {
    return resp.json({ resp: "User email not exist", userData: user });
  }
  if (question._id.toString() === user.userSecurityQuestion.userQuestionID) {

    if (
      userResetPasswordData.userAnswer === user.userSecurityQuestion.userAnswer
    ) {
      return resp.json({ resp: "User answer valid", userData: user });
    } else {
      return resp.json({ resp: "User answer not valid", userData: null });
    }
  } else {
    return resp.json({ resp: "User question does not match", userData: null });
  }
});


router.route("/newpasswordsetup/:id").put(async function (req, resp) {
  let newPasswordData = req.body;
  let userID = req.params.id;
  let isValid = userService.isPasswordValid(newPasswordData.newPassword);
  if (newPasswordData.newPassword === newPasswordData.passwordConfirm) {
    if (isValid.upperCase && isValid.passLength) {
      let response = await usersBL.UpdateUserPassword(
        userID,
        newPasswordData.newPassword
      );
      return resp.json(response);
    } else {
      if (isValid.passLength) {
        return resp.json("User mast have a capital letter in his password !");
      } else {
        if (isValid.upperCase) {
          return resp.json("User mast have a 8 letter password minimum!");
        }
        return resp.json(
          "User mast have a capital letter in his password and 8 letter minimum !"
        );
      }
    }
  } else {
    return resp.json("Password does not match");
  }
});
module.exports = router;
