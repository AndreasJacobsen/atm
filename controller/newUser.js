const connection = require('../models/loginrouters');

function insertSql(users, card, res) {
  connection.query('INSERT INTO user SET ?', users, function(error, results, fields) {
    const lastId = results.insertId;
    if (error) {
      console.log('error ocurred', error);
    } else {
      console.log('The solution is: ', results);
    }
  });
  connection.query('INSERT INTO userCards SET ?', { UserID: lastId }, card, function(
    error,
    results,
    fields
  ) {
    if (error) {
      console.log('error ocurred', error);
    } else {
      console.log('The solution is: ', results);
    }
  });
}

module.exports = insertSql;
