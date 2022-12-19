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
  let userRecevieStatus;
  let actionUser = await userBL.GetUserByID(newTransactionData.userID);

  let userActionResult = transactionService.withdrawalCalculator(
    actionUser.accountStartingPoint,
    actionUser.accountCurrentMargin,
    newTransactionData
  );


  if (userActionResult.status) {

    if(newTransactionData.type =="Transfer"){
      let revecieUser = await userBL.GetUserByID(newTransactionData.toUserID);
      newTransactionData.type = "Deposit"
          let userRevecieResult = transactionService.withdrawalCalculator(
            revecieUser.accountStartingPoint,
            revecieUser.accountCurrentMargin,
            newTransactionData
          );
          if(userRevecieResult.status){
            userRecevieStatus = await userBL.UpdateUserStartPointMargin(
              newTransactionData.toUserID,
              userRevecieResult.newStartPoint,
              userRevecieResult.newTotalMargin
            );
          }
    }
    let userTransactionStatus = await userBL.UpdateUserStartPointMargin(
      newTransactionData.userID,
      userActionResult.newStartPoint,
      userActionResult.newTotalMargin
    );

    let data = await transactionBL.AddTransaction(newTransactionData);
    return resp.json({ data, userTransactionStatus,userRecevieStatus : userRecevieStatus });
  } else {
    return resp.json("User cannot be in a debt situation !");
  }
});

module.exports = router;
