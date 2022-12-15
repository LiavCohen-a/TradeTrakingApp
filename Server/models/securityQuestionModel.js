const mongoose = require("mongoose");

let securityQuestionSchema = mongoose.Schema;

let securityQuestions = new securityQuestionSchema({
  question : String
});

module.exports = mongoose.model("securityQuestions", securityQuestions);
