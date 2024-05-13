const express = require("express")

const app = express()

const port = 3000
  
app.get('/', function(req, res){
    res.send("Here we start cohort frrom week3 start from Backend")
})

app.get('/youtube', (req, res)=>{
    res.send("Welcome to My youtube channel, DV MUSIC")
})

app.get('/about' , function(req, res){
    res.json({
        name: "Devendra Kumar Vishwakarma",
        age: 22,
        GF: "Janhvi Panday",
        age: 21
    })
})

app.listen( port , ()=>{
    console.log(` Example app running on port ${port} `);
})