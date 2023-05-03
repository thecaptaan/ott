"use strict";
require("dotenv").config();
const path = require("node:path");
const express = require("express");
const bodyParser = require('body-parser')
const cookieParser = require("cookie-parser");
const database = require('./src/utils/mongoose');
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
server.use(express.static(path.join(__dirname, "src", "assets", "videos","uploads")));


//

server.use(expressLayouts);
server.use(cookieParser());
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: false }))

server.set("view engine", "ejs");
server.set("views", path.join(__dirname, "src", "views"));

//
const unAuth = require("./src/routers/unAuth");
const Auth = require("./src/routers/Auth");

//
const signup = require("./src/controllers/signup");
const upload = require("./src/controllers/upload");
const search = require("./src/controllers/search");

server.use(unAuth);
server.use(Auth);
server.use(search);

server.use(signup);
server.use(upload);
//* Server Handling
server.listen(PORT, () => {
  console.info(`Server is listing on port http://localhost:${PORT}`);
});
