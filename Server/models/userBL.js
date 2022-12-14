const usersModel = require("./userModel");

exports.GetAllUsers = function () {
  return new Promise((resolve, reject) => {
    usersModel.find({}, function (err, data) {
      if (err) {
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

exports.GetUserByEmail = function (email) {
  return new Promise((resolve, reject) => {
    usersModel.findOne({email : email}, function (err, data) {
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
  // let arrMail = newUserData.email.split("");
  // let fixedMail = arrMail.map(x => x.toLowerCase());
  // console.log(fixedMail)
  // stringmail = fixedMail.toString(",");
  // console.log(stringmail)
  // let mail = stringmail.replace(",","")
  // console.log(mail)

  return new Promise((resolve, reject) => {
      let newUser = new usersModel({
        firstName: newUserData.firstName,
        lastName: newUserData.lastName,
        email: newUserData.email,
        password: newUserData.password,
        phone: newUserData.phone,
        accountStartingPoint: newUserData.accountStartingPoint,
        accountCurrentMargin: newUserData.accountCurrentMargin,
        createdAt : Date.now()
      });
      newUser.save((err) => {
        if (err) {
          reject(err);
        } else {
          resolve(newUserData);
        }
      });
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
