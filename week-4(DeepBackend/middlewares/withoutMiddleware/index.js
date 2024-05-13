const express = require("express")

const app = express();

app.get("/", function(req, res){
    res.send("Welcome to DV Hospital")
})

app.get('/health-checkup', function(req, res){
    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;

    // user validation
    if(username != "devendra" || password != "devendra@2000"){
        res.status(403).json({
            msg: "User doen't exist",
        })
        return;
    }

    // input validation
    if(kidneyId != 1 && kidneyId != 2){
        res.status(411).json({
            msg: "wrong inputs"
        })
        return;
    }

    // now doctor can perform operation

    console.log("Chal raha hai");

    res.send("Operation has been successfull")

})


//what if we have to introduce another route that does kidney replacement inputs need to be the same 
//ugly solution creat new route, repeat code
app.put('/replace-kidney', function(req, res){
    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;

    // user validation
    if(username != "devendra" || password != "devendra@2000"){
        res.status(403).json({
            msg: "User doen't exist",
        })
        return;
    }

    // input validation
    if(kidneyId != 1 && kidneyId != 2){
        res.status(411).json({
            msg: "wrong inputs"
        })
        return;
    }

    // now doctor can perform operation
    console.log("Chal raha hai");

    res.send("Operation of kidney raplcement has been successfull")

})

app.listen(3000);