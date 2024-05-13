const express = require("express");

const app = express();

app.use(express.json())// if you dont use it then we cant extract data from body

app.get('/', function(req, res){
    res.send("Hello Jahnvi Panday I love you")
})

app.post('/health-checkup', function(req, res){
    // aspact user give array of kidneys
    // kidneys = [1,2]
    const kidneys = req.body.kidneys;
    if(!kidneys){
        res.json({
            message: "Something went wrong"
        })
    } else {
        const kidneysLength = kidneys.length

        res.send("you have " + kidneysLength + " kidneys");
    }
});

//global catches
app.use(function(err, req, res, next){
    res.json({
        message: "Sorry something is wrong with our server"
    })
})
// we have to put this middleware in th last it will shows 
// if error give by server then all the project details are included into it prevent this we ive an error on the behalf of server.
// provide a short and better error message to user

app.listen(3000);