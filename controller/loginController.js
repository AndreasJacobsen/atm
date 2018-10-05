const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(
  'mongodb://localhost:27017/atm',
  { useNewUrlParser: true }
);

app.post('/api/login', function(req, res) {
  if (req.body.cardnumber && req.body.pin) console.log(req.body.pin);

  const newAtmUser = AtmUser({
    name: req.body.name,
    whitdrawal: [
      {
        amount: req.body.whitdrawal
      }
    ],
    reason: req.body.reason
  });
  // save the user
  newAtmUser.save(function(err) {
    if (err) throw err;

    console.log('User successfully updated!');
  });
});
