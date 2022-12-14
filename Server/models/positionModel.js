const mongoose = require("mongoose");

let positionSchema = mongoose.Schema;

let position = new positionSchema({
  userID : String,
  symbol : String,
  margin : Number,
  type : String,
  leverage : Number,
  entryPrice : Number,
  stopLoss : Number,
  liquidityPrice : Number,
  size : Number,
  positionOpenDate  : Date,
  positionClosed : Boolean,
  closePrice : Number,
  positionClosedDate : Date
  
});

module.exports = mongoose.model("positions", position);
