"use strict";
require("dotenv").config();
const path = require("node:path");
const express = require("express");
const expressLayouts = require("express-ejs-layouts");

//* Constant
const server = express();
const PORT = process.env.GET_PORT || 3000;

//* Middleware
server.use(express.static(path.join(__dirname, "src", "assets", "fonts")));
server.use(express.static(path.join(__dirname, "src", "assets", "images")));
server.use(express.static(path.join(__dirname, "src", "assets", "styles")));
server.use(express.static(path.join(__dirname, "src", "assets", "videos")));
server.use(express.static(path.join(__dirname, "src", "assets", "javascript")));

//

server.use(expressLayouts);
server.set("view engine", "ejs");
server.set("views", path.join(__dirname, "src", "views"));

//
const unAuth = require("./src/routers/unAuth");
const Auth = require("./src/routers/Auth");
server.use(unAuth);
server.use(Auth);

//* Server Handling
server.listen(PORT, () => {
  console.info(`Server is listing on port http://localhost:${PORT}`);
});
