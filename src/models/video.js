"use strict";
const moment = require('moment')
const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  video: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  _createdAt: {
    type: String,
    default: moment().format('MMMM Do YYYY, h:mm:ss a'),
    required: true,
  },
});

module.exports = mongoose.model("videos", videoSchema);
