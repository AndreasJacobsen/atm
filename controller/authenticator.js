const express = require('express');
const router = express.Router();
const connection = require('../models/loginrouters');
const bcrypt = require('bcrypt');

router.post('/', function(req, result) {
  console.log('Starting authentification proccess');
  const CardNumber = req.body.cardnumber;
  const pin = req.body.pin;
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
        console.log('The result is: ', results);
        console.log('handling pin', pin);
        console.log('results over 0 is true');
        console.log('pin result from query is: ', results[0].PIN);
        console.log('pin result from form is: ', pin);

        bcrypt.compare(pin, results[0].PIN, function(err, res) {
          if (res) {
            console.log('login succefull');
            result.status(200);
            result.send('Correct username and password');
          } else if (res == false) {
            console.log('something went wrong/email and password does not match');
            console.log(err);
            result.status(204);
            result.send('wrong username or password');
          } else {
            console.log('result lenght is 0');
            result.send({
              code: 204,
              success: 'Email does not exits'
            });
          }
        });
      } else {
        console.log('result lenght is 0');
        result.send({
          code: 204,
          success: 'Email does not exits'
        });
      }
    }
  );
});

module.exports = router;
