const positionModel = require("./positionModel");

exports.GetAllUserPosition = function (userID) {
  return new Promise((resolve, reject) => {
    positionModel.find({ userID: userID }, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

exports.GetPositionByID = function (positionID) {
  return new Promise((resolve, reject) => {
    positionModel.findById(positionID, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

exports.UpdatePosition = function (positionID, positionNewData) {
  return new Promise((resolve, reject) => {
    positionModel.findByIdAndUpdate(
      positionID,
      positionNewData,
      function (err, data) {
        if (err) {
          reject(err);
        } else {
          resolve("Position Was Updated");
        }
      }
    );
  });
};

exports.ClosePosition = function (positionID, positionNewData) {
  return new Promise((resolve, reject) => {
    positionModel.findByIdAndUpdate(
      positionID,
      {
        positionClosed : true,
        closePrice : positionNewData.closePrice,
        positionClosedDate : Date.now()
      },
      function (err, data) {
        if (err) {
          reject(err);
        } else {
          resolve("Position Was Updated");
        }
      }
    );
  });
};

exports.AddPosition = function (newPositionData) {
  return new Promise((resolve, reject) => {
    let newPosition = new positionModel({
      userID: newPositionData.userID,
      symbol: newPositionData.symbol,
      margin: newPositionData.margin,
      type: newPositionData.type,
      leverage: newPositionData.leverage,
      entryPrice: newPositionData.entryPrice,
      stopLoss: newPositionData.stopLoss,
      liquidityPrice: newPositionData.liquidityPrice,
      size: newPositionData.size,
      positionOpenDate: Date.now(),
      positionClosed: false,
      closePrice: null,
      positionClosedDate: null,
    });
    newPosition.save((err) => {
      if (err) {
        reject(err);
      } else {
        resolve("New Position Was Created");
      }
    });
  });
};

exports.DeletePosition = function (positionID) {
  return new Promise((resolve, reject) => {
    positionModel.findByIdAndDelete(positionID, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve("Position Was Deleted");
      }
    });
  });
};
