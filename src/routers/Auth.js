"use strict";

const Auth = require("express").Router();
const model = require("../models/video");
// Auth.get("/video/search",(req,res,next)=>{
//   res.render("search",{
//     title: "Search || Captaan OTT",
//     data: null
//   })
// })
Auth.get("/player/:videoID", (req, res, next) => {
  model.findOne({ video: req.params.videoID }).then((data) => {
    if (data == null) {
      res.render("player", {
        data: false,
        videoID: req.params.videoID
      });
    } else {
      res.render("player", {
        data: true,
        videoID: req.params.videoID
      });
    }
  });
});

module.exports = Auth;
