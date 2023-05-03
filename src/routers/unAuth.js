"use strict";
const unAuth = require("express").Router();

unAuth.get('/', (req, res, next)=>{
    res.render('index')
})
unAuth.get('/admin/uploader', (req, res, next)=>{
    res.render('videoUploader',{
        title: "Admin Panel || Video Player"
    })
})

module.exports = unAuth;
