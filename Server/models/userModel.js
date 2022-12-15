const mongoose = require("mongoose");

let userSchema = mongoose.Schema;
let userSecurityQuestionSchema = mongoose.Schema;

let userSecurityQuestionObj = new userSecurityQuestionSchema({
  userQuestion : String,
  userAnswer : String
});

let user = new userSchema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  phone: String,
  accountStartingPoint: Number,
  accountCurrentMargin: Number,
  createdAt: Date,
  userSecurityQuestion : userSecurityQuestionObj
});

module.exports = mongoose.model("users", user);
