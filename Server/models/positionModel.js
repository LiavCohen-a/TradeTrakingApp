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
  closePrice : Number,
  liquidityPrice : Number,
  size : Number,
  date : Date,
  positionClosed : Boolean,
  positionClosedDate : Date
  
});

module.exports = mongoose.model("Positions", position);
