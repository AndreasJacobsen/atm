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
  function setValue(value) {
    userAccount = value;
    console.log('userAccount is: ', userAccount);
    console.log('userAccount is: ', userAccount[0].BankNumber);
  }
}
module.exports = transfereMoney;
