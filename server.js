const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());
app.post("/api/formdata", function(req, res) {
  var name = req.body.name; //fixed
  var whitdrawal = req.body.whitdrawal; //fixed
  var reason = req.body.reason; //fixed
  console.log("Hentet data", name, whitdrawal, reason);
});

app.get("/api/hello", (req, res) => {
  res.send({ express: "Denne meldingen kommer fra Express.js backend" });
});
app.get("/api/balance", (req, res) => {
  console.log("Hei fra balanse API punktet");
});

app.listen(port, () => console.log(`Back end is listening on port ${port}`));
