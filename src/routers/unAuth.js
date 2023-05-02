"use strict";
const unAuth = require("express").Router();

unAuth.get('/', (req, res, next)=>{
    res.render('index')
})

module.exports = unAuth;
