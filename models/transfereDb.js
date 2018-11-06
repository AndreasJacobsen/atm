const connection = require('../models/loginrouters');

function transfereMoney(transfere) {
  let userAccount = [];
  connection.query(
    "SELECT CardNumber, BankNumber, Balance FROM userCards WHERE BankNumber = '" + transfere + "'",
    function(err, rows) {
      if (err) {
        throw err;
      } else {
        console.log('rows is: ', rows);
        console.log('rows is: ' + rows);
        setValue(rows);
      }
    }
  );
  function setValue(value) {
    userAccount = value;
    console.log('userAccount is: ', userAccount);
  }
}
module.exports = transfereMoney;
