const usersBL = require("../models/userBL");
const express = require("express");
const router = express.Router();
const userService = require('../services/userService');

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

  if (isValid.upperCase && isValid.passLength) {
    let userEmail = userService.emailUserFix(newUserData);
    newUserData.email = userEmail;
    let data = await usersBL.AddUser(newUserData);
    return resp.json(data);
  } else {
    if (isValid.passLength) {
      return resp.json("User mast have a capital letter in his password !");
    } else {
      if (isValid.upperCase) {
        return resp.json("User mast have a 8 letter password minimum!");
      }
      return resp.json("User mast have a capital letter in his password and 8 letter minimum !");
    }
  }
});

router.route("/:id").put(async function (req, resp) {
  let userID = req.params.id;
  let newUserData = req.body;
  let userEmail = userService.emailUserFix(newUserData);
  newUserData.email = userEmail;
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
      return resp.json("User mast have a capital letter in his password and 8 letter minimum !");
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
  userData.email = userEmail
  let isExist = userService.isUserExist(user,userData);
  if(isExist){
    return resp.json("Hey " + user.firstName +" You've logged in successfully!");
  }else{
    return resp.json("The username or password are invalid!");
}});

module.exports = router;
