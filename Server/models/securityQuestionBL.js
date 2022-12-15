const securityQuestionModel = require("./securityQuestionModel");

exports.GetAllQuestions = function () {
  return new Promise((resolve, reject) => {
    securityQuestionModel.find({}, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

exports.GetQuestionByID = function (questionID) {
  return new Promise((resolve, reject) => {
    securityQuestionModel.findById(questionID, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

exports.UpdateQuestion = function (questionID, questionNewData) {
  return new Promise((resolve, reject) => {
    securityQuestionModel.findByIdAndUpdate(
      questionID,
      questionNewData,
      function (err, data) {
        if (err) {
          reject(err);
        } else {
          resolve("question Was Updated");
        }
      }
    );
  });
};

exports.AddQuestion = function (newQuestionData) {
  return new Promise((resolve, reject) => {
    let newQuestion = new securityQuestionModel({
      question: newQuestionData.question,
    });
    newQuestion.save((err) => {
      if (err) {
        reject(err);
      } else {
        resolve("New Question Was Created");
      }
    });
  });
};

exports.DeleteQuestion = function (questionID) {
  return new Promise((resolve, reject) => {
    securityQuestionModel.findByIdAndDelete(questionID, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve("Question Was Deleted");
      }
    });
  });
};
