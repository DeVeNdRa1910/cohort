// you have to count number of server requests
const express = require("express");

const app = express()

const port = 3000;

let numberOfRequest = 0;

app.use((req, res, next)=>{
  numberOfRequest = numberOfRequest+1;
  next();
})

app.get('/', function(req, res){
  res.status(200).json({name: 'Janhvi Panday'})
})

app.post('/user', function(req, res){
  res.status(200).json({msg: "dummy user created"})
})

app.get('/requestCount', function(req, res){
  res.status(200).json({numberOfRequest})
})

app.listen(port)