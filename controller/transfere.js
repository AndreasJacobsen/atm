const express = require('express');
const router = express.Router();
const transfereMoney = require('../models/transfereDb');

router.post('/', function(req, result) {
  // prettier-ignore
  const bankNumber = "666"
  transfereMoney(bankNumber);
});

module.exports = router;
