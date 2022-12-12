const mongoose = require("mongoose");

let userSchema = mongoose.Schema;

let user = new userSchema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  phone: String,
  accountStartingPoint: Number,
  accountCurrentMargin: Number,
});

module.exports = mongoose.model("users", user);
