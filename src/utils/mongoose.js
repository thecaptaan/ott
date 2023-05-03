"use strict"
const mongoose = require('mongoose')

mongoose.connect(process.env.GET_DB_URL)

mongoose.connection.on("connected", ()=>{
    console.log("Connection is established")
})

mongoose.connection.on("error", ()=>{
    console.log("Connection is errored")
})

