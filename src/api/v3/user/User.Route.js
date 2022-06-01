const express = require("express");
const route = express.Router();

route.get("/user", (req, res) => {
  res.send("User Route");
});

module.exports = route;
