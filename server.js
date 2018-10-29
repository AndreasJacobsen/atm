const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;
const AtmUser = require('./models/atmuser');
const cors = require('cors');
const errorHandler = require('errorhandler');
const session = require('express-session');

// Connection data to MongoDB databas
mongoose.Promise = global.Promise;
mongoose.connect(
  'mongodb://localhost:27017/atm',
  { useNewUrlParser: true }
);

// Dataparser, parsing data from react front end to Json
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(cors());
// Morgan does logging
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  session({
    secret: 'secret-atm-secret',
    cookie: { maxAge: 60000 },
    resave: true,
    saveUninitialized: false
  })
);

// Use the parson in the app
app.use(bodyParser.json());

// Get POST values from /api/formdata endpoint, data is sent from client.
app.post('/api/formdata', function(req) {
  const newWhitdrwal = AtmUser({
    name: req.body.name,
    whitdrawal: [{ amount: req.body.whitdrawal }],
    reason: req.body.reason
  });
  // save the user
  newWhitdrwal.save(function(err) {
    if (err) throw err;

    console.log('User successfully updated!');
  });
});

app.post('/api/newUser', function(req) {
  const newUser = AtmUser({
    name: req.body.name,
    balance: req.body.balance,
    address: req.body.address,
    ssn: req.body.ssn,
    bankNumber: req.body.bankNumber,
    cards: [
      {
        formType: req.body.type, // Visa eller Mastercard
        cardNumber: req.body.cardNumber,
        cvc: req.body.cvc,
        expirationDate: req.body.expirationDate,
        pin: req.body.pin
      }
    ]
  });

  newUser.save(function(err) {
    if (err) throw err;
    console.log('A new user has been made');
  });
});

app.post('/api/login', function(req, res) {
  AtmUser.statics.authenticate = function(pin, callback) {
    userSchema
      .findOne({
        cards: [pin]
      })
      .exec(function(err, user) {
        if (err) {
          return callback(err);
        } else if (!userSchema) {
          var err = new Error('User not found');
          err.status = 401;
          return callback(error);
        }

        bcrypt.compare(req.body.pin, userSchema.pin, function(err, result) {
          if (result == true) {
            return callback(null, user);
          } else {
            return callback();
          }
        });
      });
  };
});

// Show data as JSON at /api/showFormData
app.get('/api/showFormData', function(req, res) {
  AtmUser.find({}, function(err, users) {
    if (err) throw err;
    console.log('User succefully created');
    res.send({ users });
  });
});
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Denne meldingen kommer fra Express.js backend' });
});

// Defines server port number, set to 5000 for back end and 3000 for front end.
app.listen(port, () => console.log(`Back end is listening on port ${port}`));
