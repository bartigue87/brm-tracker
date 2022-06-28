const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const usersRoutes = require("./backend/routes/users-routes");
const trackerRoutes = require("./backend/routes/tracker-routes");
const HttpError = require("./backend/models/http-error");

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});

app.use("/api/trackers", trackerRoutes);
app.use("/api/users", usersRoutes);

app.use((req, res, next) => {
  const error = new HttpError("Could not find this route", 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "Unknown error occurred" });
});

mongoose
  .connect(
    "mongodb+srv://brandonartigue:p4ssw0rd@cluster0.owwfv8l.mongodb.net/tracker?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(5002);
  })
  .catch((err) => {
    console.log(err);
  });