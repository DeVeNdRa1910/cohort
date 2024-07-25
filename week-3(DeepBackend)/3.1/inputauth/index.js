const express = require("express");
const zod = require("zod");
const app = express();

const kidnaySchema = zod.array(zod.number()) // kidneys are array of number 

app.use(express.json());

app.get('/', function(req, res){
    res.send("Start learning of authentication and ZOD")
})

app.post("/health-checkup", function(req, res){
    // kidneys = [1,2,3,4,5,6,7,8,9,10]
    const kidneys = req.body.kidneys;
    const resp = kidnaySchema.safeParse(kidneys)
    if(!resp.success){
        res.status(411).json({
            message: "input is not valid"
        })
        console.log(resp.error.issues);
    } else {
        res.send({
            resp
        })
    }
});

//global catches

app.listen(5000, ()=>{
    console.log("App running on port localhost:5000");
});