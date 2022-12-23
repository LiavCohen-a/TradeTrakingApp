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
    usersModel.findOne({ email: email }, function (err, data) {
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
exports.UpdateUserPassword = function (UserID, newPassword) {
  return new Promise((resolve, reject) => {
    usersModel.findByIdAndUpdate(
      UserID,
      { password: newPassword },
      function (err, data) {
        if (err) {
          reject(err);
        } else {
          resolve("Password Was Successfully Updated");
        }
      }
    );
  });
};
exports.UpdateUserStartPointMargin = function (
  UserID,
  newAccountStartingPoint,
  newAccountCurrentMargin
) {
  return new Promise((resolve, reject) => {
    usersModel.findByIdAndUpdate(
      UserID,
      {
        accountStartingPoint: newAccountStartingPoint,
        accountCurrentMargin: newAccountCurrentMargin,
      },
      function (err, data) {
        if (err) {
          reject(err);
        } else {
          resolve("User Transaction Was Successfully Updated");
        }
      }
    );
  });
};
exports.AddUser = function (newUserData) {
  return new Promise((resolve, reject) => {
    let newUser = new usersModel({
      firstName: newUserData.firstName,
      lastName: newUserData.lastName,
      email: newUserData.email,
      password: newUserData.password,
      phone: newUserData.phone,
      accountStartingPoint: newUserData.accountStartingPoint,
      accountCurrentMargin: newUserData.accountStartingPoint,
      createdAt: Date.now(),
      userSecurityQuestion: newUserData.userSecurityQuestion,
    });
    newUser.save((err) => {
      if (err) {
        reject(err);
      } else {
        resolve(newUser);
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

