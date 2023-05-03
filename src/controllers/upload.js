"use strict";
const fs = require("node:fs");
const multer = require("multer");
const path = require("node:path");
const model = require("../models/video");
const { nanoid } = require("nanoid");
const uploadController = require("express").Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "/home/thecaptaan/Documents/ott/src/assets/videos/uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = file.fieldname + "_" + Date.now();
    cb(null, "uploader_" + uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage }).single("fileuploadinput");

uploadController.post("/upload", (req, res, next) => {
  upload(req, res, (err) => {
    let videoID = nanoid(6);
    fs.rename(
      req.file.path,
      req.file.destination +
        "/" +
        videoID +
        path.extname(req.file.originalname),
      (error) => {
        if (error) {
          deleteFile(req.file.path);
          res.json({
            success: false,
            error: "Unable to process the file.",
          });
        } else {
          console.log(req.body)
          model
            .create({
              video: videoID,
              title: req.body.videoTitle,
              description: req.body.videoDescription,
            })
            .then((data) => {
              res.json({
                success: true,
              });
            })
            .catch((error) => {
              deleteFile(req.file.path);
              console.log(error)
              res.json({
                success: false,
                error: "Unable to save data.",
              });
            });
        }
      }
    );
  });
});

function deleteFile(filePath) {
  fs.unlink(filePath, () => {});
}
module.exports = uploadController;
