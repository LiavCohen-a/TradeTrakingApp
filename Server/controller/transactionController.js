const transactionBL = require("../models/transactionBL");
const userBL = require("../models/userBL");
const express = require("express");
const router = express.Router();
const transactionService = require("../services/transactionService");

router.route("/").get(async function (req, resp) {
  let data = await transactionBL.GetAllTransactions();
  return resp.json(data);
});

router.route("/user/:id").get(async function (req, resp) {
  let userID = req.params.id;
  let data = await transactionBL.GetAllUserTransactions(userID);
  return resp.json(data);
});

router.route("/:id").get(async function (req, resp) {
  let transactionID = req.params.id;
  let data = await transactionBL.GetTransactionByID(transactionID);
  return resp.json(data);
});

router.route("/type").post(async function (req, resp) {
  let userAsk = req.body;
  let data = await transactionBL.GetAllUserTransactionsByType(
    userAsk.userIDAsk,
    userAsk.typeAsk
  );
  return resp.json(data);
});

router.route("/").post(async function (req, resp) {
  let newTransactionData = req.body;
  let userData = await userBL.GetUserByID(newTransactionData.userID);
  let userDataResult = transactionService.withdrawalCalculator(
    userData.accountStartingPoint,
    userData.accountCurrentMargin,
    newTransactionData
  );
  if (userDataResult.status) {
    let userTransactionStatus = await userBL.UpdateUserStartPointMargin(
      newTransactionData.userID,
      userDataResult.newStartPoint,
      userDataResult.newTotalMargin
    );
    let data = await transactionBL.AddTransaction(newTransactionData);
    return resp.json({ data, userTransactionStatus });
  } else {
    return resp.json("User cannot be in a debt situation !");
  }
});

module.exports = router;
