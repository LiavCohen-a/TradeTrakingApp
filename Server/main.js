const PORT = 8000;

const bodyParser = require("body-parser");
const express = require('express');
const app = express();
const cors = require("cors");


app.use(bodyParser.urlencoded({ extended: true })).use(bodyParser.json());
app.use(cors());



app.listen(PORT,() =>{console.log("Server Runs At Port " +  PORT)})
