const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 5000;
const AtmUser = require("./models/atmuser");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/atm");

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());
app.post("/api/formdata", function(req, res) {
  const newAtmUser = AtmUser({
    name: req.body.name,
    whitdrawal: req.body.whitdrawal,
    reason: req.body.reason
  });
  // save the user
  newAtmUser.save(function(err) {
    if (err) throw err;

    console.log("User successfully updated!");
  });
});

app.get("/api/showFormData", function(req, res) {
  AtmUser.find({}, function(err, users) {
    if (err) throw err;

    // object of all the users
    console.log(users);
    res.send({ users });
  });
});
app.get("/api/hello", (req, res) => {
  res.send({ express: "Denne meldingen kommer fra Express.js backend" });
});
app.get("/api/balance", (req, res) => {
  console.log("Hei fra balanse API punktet");
});

app.listen(port, () => console.log(`Back end is listening on port ${port}`));
