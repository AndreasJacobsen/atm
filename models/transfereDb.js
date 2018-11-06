const connection = require('../models/loginrouters');

function transfereMoney(bankNumber, reciverBankNumber, transfereAmount) {
  let userAccount = [];
  connection.query(
    "SELECT CardNumber, BankNumber, Balance FROM userCards WHERE BankNumber = '" + bankNumber + "'",
    function(err, rows) {
      if (err) {
        throw err;
      } else {
        setValue(rows);
      }
    }
  );
  function setValue(value, res) {
    userAccount = value;
    const ownBalance = userAccount[0].Balance;
    console.log('userAccount is: ', userAccount);
    console.log('userAccount is: ', userAccount[0].BankNumber);
    if (ownBalance > transfereAmount) {
      console.log('you have nuff moneiz');
      connection.query(
        "UPDATE userCards SET balance = balance - '" +
          transfereAmount +
          "' WHERE BankNumber = '" +
          bankNumber +
          "'"
      );
      connection.query(
        "UPDATE userCards SET balance = balance + '" +
          transfereAmount +
          "' WHERE BankNumber = '" +
          reciverBankNumber +
          "'"
      );
    } else {
      console.log("you don't have nuff moneiz");
    }
  }
}
module.exports = transfereMoney;
