const express = require("express");

const app = express();
const port = process.env.PORT || 5000;

app.get("/api/hello", (req, res) => {
  res.send({ express: "Denne meldingen kommer fra Express.js backend" });
});
app.get("/api/balance", (req, res) => {
  console.log("Hei fra balanse API punktet");
});

app.listen(port, () => console.log(`Back end is listening on port ${port}`));
