"use strict";

const signup = require("express").Router();
const model = require("../models/user");
signup.post("/new/account", (req, res, next) => {
  if (req.cookies.logged == true) {
    res.json({
      error: true,
      data: "Already Logged In",
    });
  } else {
    model
      .create({
        fullName: req.body.fullName,
        email: req.body.email,
        password: req.body.password,
      })
      .then((data) => {
        res.cookie("logged", true);
        res.redirect("/");
      })
      .catch((error) => {
        res.end();
      });
  }
});

module.exports = signup