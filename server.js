const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const insertSql = require('./controller/newUser.js');

// Dataparser, parsing data from react front end to Json
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
// Morgan does logging
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use the parson in the app
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

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
// prettier-ignore

app.post('/api/newUser', function(req){
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
