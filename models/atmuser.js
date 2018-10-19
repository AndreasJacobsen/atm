const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

// Creates the needed schema
let userSchema = new Schema({
  name: String,
  created_at: Date,
  updated_at: Date,
  balance: Number,
  address: String,
  ssn: Number,
  bankNumber: Number,
  cards: [
    {
      formType: String, // Visa eller Mastercard
      cardNumber: Number,
      cvc: Number,
      expirationDate: Date,
      pin: String,
      status: Boolean
    }
  ],
  whitdrawal: [
    {
      amount: Number,
      date: String,
      reason: String
    }
  ]
});
userSchema.pre('save', function(next) {
  const currentDate = new Date();
  // 10 defines salt rounds
  let pin = this.cards[0].pin;
  bcrypt
    .hash(pin, 10)
    .then(pin => {
      this.updated_at = currentDate;
      this.date = currentDate;
      this.cards[0].pin = pin;
      console.log('Pin is ' + pin);
      if (!this.created_at) this.created_at = currentDate;
      next();
    })
    .catch(err => {
      next(err);
    });
});

// Creates model for schema
const AtmUser = mongoose.model('AtmUser', userSchema);

// Export so it is available for the rest of the application
module.exports = AtmUser;
