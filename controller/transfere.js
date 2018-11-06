const express = require('express');
const router = express.Router();
const transfereMoney = require('../models/transfereDb');

router.post('/', function(req, result) {
  // prettier-ignore
  const bankNumber = "666"
  const reciverBankNumber = '777';
  const transfereAmount = '333';
  transfereMoney(bankNumber, reciverBankNumber, transfereAmount);
});

module.exports = router;
