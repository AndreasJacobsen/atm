var express = require('express');
var router = express.Router();
const insertSql = require('./newUser.js');

// prettier-ignore
router.post('/', function(req){
    console.log("req",req.body);
    const today = new Date();
    const users={
      "fName":req.body.Fname,
      "lName":req.body.Lname,
      "CreatedAt":today,
      "SSN": req.body.ssn,    
    }
    const card={
      "bankNumber": req.body.bankNumber,
      "type": req.body.type,
      "CardNumber": req.body.cardNumber, 
      "CVC": req.body.cvc, 
      "expirationDate": req.body.expirationDate,
      "PIN":req.body.PIN,
    }
    insertSql(users, card)
  })
/* prettier-enable */
module.exports = router;
