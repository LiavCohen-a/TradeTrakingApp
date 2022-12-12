const usersModel = require("./userModel");
let userService = require("../services/userService");

exports.GetAllUsers = function () {
  return new Promise((resolve, reject) => {
    usersModel.find({}, function (err, data) {
      if (err) {
        console.log("err");

        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

exports.GetUserByID = function (UserID) {
  return new Promise((resolve, reject) => {
    usersModel.findById(UserID, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

exports.UpdateUser = function (UserID, UserNewData) {
  return new Promise((resolve, reject) => {
    usersModel.findByIdAndUpdate(UserID, UserNewData, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve("User Was Updated");
      }
    });
  });
};

exports.AddUser = function (newUserData) {
  return new Promise((resolve, reject) => {
    let resp = userService.isPasswordValid(newUserData.password);

    if (resp.upperCase && resp.passLength) {
      let newUser = new usersModel({
        firstName: newUserData.firstName,
        lastName: newUserData.lastName,
        email: newUserData.email,
        password: newUserData.password,
        phone: newUserData.phone,
        accountStartingPoint: newUserData.accountStartingPoint,
        accountCurrentMargin: newUserData.accountCurrentMargin,
      });
      newUser.save((err) => {
        if (err) {
          reject(err);
        } else {
          resolve("New User Was Created");
        }
      });
    } else {
      if (resp.passLength) {
        resolve("User mast have a capital letter in his password !");
      } else {
        if (resp.upperCase) {
          resolve("User mast have a 8 letter password minimum!");
        }
        resolve(
          "User mast have a capital letter in his password and 8 letter minimum !"
        );
      }
    }
  });
};

exports.DeleteUser = function (UserID) {
  return new Promise((resolve, reject) => {
    usersModel.findByIdAndDelete(UserID, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve("User Was Deleted");
      }
    });
  });
};
