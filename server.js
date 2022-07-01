const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// for another route
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function (req, res) {
  let weight = Number(req.body.weight);
  let height = Number(req.body.height);
  let Bmi = weight / height;
  res.send("The result is " + Bmi);
});

app.listen(3000, function () {
  console.log("The server has started on port 3000");
});
