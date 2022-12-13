let mongoose = require("mongoose");
mongoose.set("strictQuery", true);

mongoose.connect("mongodb://127.0.0.1:27017/TradingDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
