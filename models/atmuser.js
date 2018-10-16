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
      expirationDate: Number,
      pin: Number,
      status: Boolean,
    }
  ],
  whitdrawal: [
    {
      amount: Number,
      date: Date, // Skriv auto date logikk
      reason: String
    }
  ]
});
// Inserts
userSchema.pre('save', function(next) {
  const currentDate = new Date();
  // 10 defines salt rounds
  bcrypt.hash(this.pin, 10, function(err,hash){
    if(err){
      return next(err); 
    }
    this.pin = hash; 
  })
  this.updated_at = currentDate;
  this.date = currentDate;
  if (!this.created_at) this.created_at = currentDate;

  next();
});

// Creates model for schema
const AtmUser = mongoose.model('AtmUser', userSchema);

// Export so it is available for the rest of the application
module.exports = AtmUser;
