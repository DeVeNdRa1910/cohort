import express from "express";
import jwt from "jsonwebtoken";

const jwtPassword = "12345678";

const app = express();
app.use(express.json());

const All_USER = [
    {
        username: "divyanshi",
        age: 24,
        name: "Divyanshi Jain",
        password: "asdfasdf"
    },
    {
        username: "jpanday",
        age: 23,
        name: "Jahnvi Panday",
        password: "asdfasdf"
    },
    {
        username: "devendra2000",
        age: 23,
        name: "Devendra Vishwawkarma",
        password: "asdfasdf"
    },
]

function userExist(username, password){
    // write login to return teu or false according to array
    const user = All_USER.findIndex(user => (user.username===username && user.password===password));
    if(user) return true;
    return false;
}

app.post("/signin", function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    if(!userExist(username, password)){
        return res.status(403).json({
            msg: "User does not exist in our DB"
        })
    }

    var token = jwt.sign({username: username}, "hahahihi")
    return res.json({
        token,
    })
})

app.get("/users" , function(req, res){
    const token = req.headers.authorization;

    try {
        const decode = jwt.verify(token, jwtPassword);
        console.log(decode);
        const username = decode.username;
        res.status(200).json({
            mas: All_USER
        })
    } catch (error) {
        return res.status(403).json({
            msg: "Invalid Token"
        })
    }
})

app.listen(3000, () => {
    console.log("your server running on PORT 3000");
});