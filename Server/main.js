const PORT = 8000;

require("./config/database");

const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: true })).use(bodyParser.json());
app.use(cors());

const userController = require("./controller/userController");

app.use("/api/users", userController);

app.listen(PORT, () => {
  console.log("Server Runs At Port " + PORT);
});
