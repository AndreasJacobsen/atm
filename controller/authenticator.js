const express = require('express');
const router = express.Router();
const connection = require('../models/loginrouters');
const bcrypt = require('bcrypt');

router.post('/', function(req, result) {
  console.log('Starting authentification proccess');
  const CardNumber = req.body.cardnumber;
  const pin = req.body.pin;
  console.log(pin, CardNumber);
  connection.query(
    'SELECT PIN, CardNumber, UserID FROM userCards WHERE CardNumber = ?',
    [CardNumber],
    function(error, results, fields) {
      if (error) {
        console.log('error ocurred', error);
        res.send({
          code: 400,
          failed: 'error ocurred'
        });
      } else if (results.length > 0) {
        bcrypt.compare(pin, results[0].PIN, function(err, res) {
          if (res) {
            console.log('login succefull');
            result.status(200);
            result.json({ message: results[0].CardNumber, status: true });
          } else if (res == false) {
            console.log('something went wrong/email and password does not match');
            console.log(err);
            result.status(200);
            result.json({ message: false, status: false });
          } else {
            console.log('result lenght is 0');
          }
        });
      } else {
        console.log('result lenght is 0');
        result.status(200);
        result.json({ message: false, status: false });
      }
    }
  );
});

module.exports = router;
