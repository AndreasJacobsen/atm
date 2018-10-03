const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 5000;

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/atm");

const whitdrawalSchema = new mongoose.Schema({
  name: String,
  whitdrawal: Number,
  reason: String
});
var AtmUser = mongoose.model("AtmUser", whitdrawalSchema);

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());
app.post("/api/formdata", function(req, res) {
  const whitdrawalData = new AtmUser(req.body);
  whitdrawalData
    .save()
    .then(item => {
      res.send("item saved to database");
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });

  const name = req.body.name;
  const whitdrawal = req.body.whitdrawal;
  const reason = req.body.reason;
  console.log("Hentet data", name, whitdrawal, reason);
});

app.get("/api/hello", (req, res) => {
  res.send({ express: "Denne meldingen kommer fra Express.js backend" });
});
app.get("/api/balance", (req, res) => {
  console.log("Hei fra balanse API punktet");
});

app.listen(port, () => console.log(`Back end is listening on port ${port}`));
