"use strict"

const Auth = require('express').Router()


Auth.get('/player/:videoID',(req,res,next)=>{
    res.render("player")
})

module.exports = Auth