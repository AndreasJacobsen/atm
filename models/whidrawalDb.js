const connection = require('../models/loginrouters');

function takeMoney(amount, cardnumber) {
  // prettier-ignore
  console.log("db cardnumber is".cardnumber)
  console.log('db amount is', amount);
  connection.query(
    "UPDATE userCards SET balance = balance - '" +
      amount +
      "' WHERE CardNumber = '" +
      cardnumber +
      "'"
  );
}

module.exports = takeMoney;
