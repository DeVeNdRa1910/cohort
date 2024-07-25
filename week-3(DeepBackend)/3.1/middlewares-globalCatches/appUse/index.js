const express = require("express")

const app = express()

app.use(express.json()) // this middleware call everywhere whenever request hits server 

//but middleware wrote by us that call only for those request where we want to call it.

// we make a middleware wich we have to call on every route number of request
var numberOfRequest = 0;

function calculateRequests(){
    numberOfRequest++;
    console.log(numberOfRequest);
    next();
}

app.use(calculateRequests) // calculateRequests will call on every rout which present below the app.use(calculateRequests) by default

// express.json() return a function there for we call it inside the app.use(), express.json() is instance of a another function

app.get('/health-checkup', function(req, res){
    console.log(req.body);
    res.json({
        msg: "All ok"
    })
})

//request.body can return anything like JSON, HTML, JS, HTML, XML, Text that why we always convert bodys data as JSON bcz JS underStand JS

app.get("/kidney-checkup", function(req, res){
    res.send("Your Kidney is absolutly fine")
})

app.listen(8000)