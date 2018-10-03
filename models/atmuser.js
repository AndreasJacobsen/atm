const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creates the needed schema
let whitdrawalSchema = new Schema({
  name: { type: String, required: true },
  whitdrawal: { type: Number, required: true },
  reason: { type: String, required: true },
  created_at: Date,
  updated_at: Date
});
// Inserts
whitdrawalSchema.pre("save", function(next) {
  const currentDate = new Date();
  this.updated_at = currentDate;

  if (!this.created_at) this.created_at = currentDate;

  next();
});

// Creates model for schema
const AtmUser = mongoose.model("AtmUser", whitdrawalSchema);

// Export so it is available for the rest of the application
module.exports = AtmUser;
