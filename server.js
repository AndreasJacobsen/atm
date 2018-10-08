const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;
const AtmUser = require('./models/atmuser');

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

// Use the parson in the app
app.use(bodyParser.json());

// Get POST values from /api/formdata endpoint, data is sent from client.
app.post('/api/formdata', function(req, res) {
  const newAtmUser = AtmUser({
    name: req.body.name,
    whitdrawal:[
      {amount : req.body.whitdrawal}
    ],
    reason: req.body.reason
  });
  // save the user
  newAtmUser.save(function(err) {
    if (err) throw err;

    console.log('User successfully updated!');
  });
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
