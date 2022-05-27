const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(`${__dirname}/public/index.html`);
});

app.post("/", function (req, res) {
  console.log(req.body.endOfDayBalance);
});

app.listen(3000, function () {
  console.log("Server is running on PORT 3000");
});
