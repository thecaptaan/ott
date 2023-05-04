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
unAuth.get('/about', (req, res, next)=>{
    res.render('about',{
        title: "About || Video Player"
    })
})

module.exports = unAuth;
