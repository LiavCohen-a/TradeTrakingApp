exports.withdrawalCalculator = (
  accountStartingPoint,
  accountCurrentMargin,
  newTransactionData
) => {
  let newStartPoint = 0;
  let newTotalMargin = 0;
  let status = true;
  switch (newTransactionData.type) {
    case "Withdrawal":
      newStartPoint = accountStartingPoint - newTransactionData.usdAmount;
      newTotalMargin = accountCurrentMargin - newTransactionData.usdAmount;
      if (newStartPoint < 0 || newTotalMargin < 0) {
        status = false;
      }

      return { newStartPoint, newTotalMargin, status };
    case "Deposit":
      newStartPoint = accountStartingPoint + newTransactionData.usdAmount;
      newTotalMargin = accountCurrentMargin + newTransactionData.usdAmount;

      return { newStartPoint, newTotalMargin, status };
    case "Transfer":
      newStartPoint = accountStartingPoint;
      newTotalMargin = accountCurrentMargin - newTransactionData.usdAmount;
      if (newStartPoint < 0 || newTotalMargin < 0) {
        status = false;
      }
      return { newStartPoint, newTotalMargin, status };
  }
};
