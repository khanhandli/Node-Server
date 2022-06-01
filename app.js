const express = require("express");
const helmet = require("helmet");
const mongoose = require("mongoose");
const morgan = require("morgan");

const userRoute = require("./src/api/v3/user/User.Route");
const { mongodb } = require("./src/config/Database.config");
console.log("🚀 ~ file: app.js ~ line 8 ~ mongodb", mongodb);

const app = express();

app.use(helmet());
app.use(morgan("common"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect(
  `${mongodb.URL}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Mongodb connection");
  }
);

app.use("/api", userRoute);

module.exports = app;
