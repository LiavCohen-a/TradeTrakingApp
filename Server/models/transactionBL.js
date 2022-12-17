const transactionModel = require("./transactionModel");

exports.GetAllTransactions = function (userID) {
  return new Promise((resolve, reject) => {
    transactionModel.find({}, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};
exports.GetAllUserTransactions = function (userID) {
  return new Promise((resolve, reject) => {
    transactionModel.find({ userID: userID }, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};
exports.GetAllUserTransactionsByType = function (userIDAsk, typeAsk) {
  return new Promise((resolve, reject) => {
    transactionModel.find(
      { userID: userIDAsk, type: typeAsk },
      function (err, data) {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      }
    );
  });
};

exports.GetTransactionByID = function (transactionID) {
  return new Promise((resolve, reject) => {
    transactionModel.findById(transactionID, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

exports.AddTransaction = function (newTransactionData) {
  return new Promise((resolve, reject) => {
    let newTransaction = new transactionModel(newTransactionData);
    newTransaction.save((err) => {
      if (err) {
        reject(err);
      } else {
        resolve(newTransaction);
      }
    });
  });
};
