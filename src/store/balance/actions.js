export const deposit = (depositAmount) => ({
  type: "balance/deposit",
  payload: depositAmount,
});

export const withdraw = (withdrawAmount) => ({
  type: "balance/withdrwa",
  payload: withdrawAmount,
});
