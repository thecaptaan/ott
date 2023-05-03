"use strict";

const search = require("express").Router();
const model = require("../models/video");

search.get("/video/search/", (req, res, next) => {
  if (req.query.title) {
    model.find({ title: req.query.title }).then((data) => {
        console.log(req.query.title)
        console.log(data)
      if (data == null) {
        res.render("search", {
          data: null,
        });
      } else {
        res.render("search", {
          data: data,
        });
      }
    }).catch(
        error => {
            console.log(error)
        }
    )
  }
});

module.exports = search
