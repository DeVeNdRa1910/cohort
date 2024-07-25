// const express = require("express")
import express from "express";

const app = express();

const users=[
    {
        name: "John",
        kidneys: [{
            healthy: false,
        },{
            healthy: true
        }]
    }
]

app.use(express.json())

//In this world human can have more then two kidneys

app.get('/', function(req, res){
    // patient want to know how many kidney they have , and hown many are healthy
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    const johnHealthyKidney = (johnKidneys.filter(kid => kid.healthy===true)).length;
    const johnUnHealthyKidney = numberOfKidneys-johnHealthyKidney;

    res.json({
        johnKidneys,
        numberOfKidneys,
        johnHealthyKidney,
        johnUnHealthyKidney
    })

})

// have to used middlewere
app.post('/', function(req, res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "DONE"
    })
})

//replace unHealthy kidney with Healthy kidney
app.put('/', function(req, res){
    for(let i = 0 ; i < users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({
        operation: "Successfull"
    })
})


//remove unhealthy kidney
app.delete('/', function(req, res){
    const newArr = users[0].kidneys.filter(kidney => kidney.healthy===true)
    users[0].kidneys = newArr
    res.json({
        operation: "Successfull"
    })
})

app.listen(3000);
// get operation can done by browser But post, put/patch and delete only done by postman , APIDOG