const express = require("express");

const app = express();

const port = 5000;

app.get('/', function(req, res){
    res.send("Start learning of authentication and ZOD")
})

app.listen(port, ()=>{
    console.log("App running on port ", port);
});