const mongoose = require("mongoose");

let transactionSchema = mongoose.Schema;

let transaction = new transactionSchema({
  userID: String,
  type: String,
  usdAmount: Number,
  transferUserID : String
});

module.exports = mongoose.model("transactions", transaction);
