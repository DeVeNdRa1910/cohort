const express = require("express")

const app = express();

function userMiddleware(req, res, next) {
    // user validation
    if (username != "devendra" || password != "devendra@2000") {
        res.status(403).json({
            msg: "User doen't exist",
        })
    } else {
        next();
    }
}

//next is the function which should be run when all the checks are fine then next() or will pass the operation to next middleware or next function 
// like afetr userVarification kednyCheck should run after that root function should be run

function kidneyMiddleware(req, res, next) {
    // input validation
    if (kidneyId != 1 && kidneyId != 2) {
        res.status(411).json({
            msg: "wrong inputs"
        })
    } else {
        next();
    }
}

app.get('/health-checkup' , userMiddleware, kidneyMiddleware, function(req, res){
    // do something with kidney
    res.send("Kidney Operation has been successfull")
})

app.get("/kidney-check", userMiddleware, kidneyMiddleware, function(req, res){
    // check kidney is working well or not
    res.send("ypur kidney working well")
})

app.get("/heart-attack", userMiddleware, kidneyMiddleware, function(req, res){
    // heart is little bit ok
    res.send("minor hear attavk due to kidney")
})

//what if we have to introduce another route that does kidney replacement inputs
app.put('/replace-kidney',userMiddleware, kidneyMiddleware, function(req, res){
    // now doctor can perform operation
    console.log("Chal raha hai");
    res.send("Operation of kidney raplcement has been successfull")

})

app.listen(3000)
