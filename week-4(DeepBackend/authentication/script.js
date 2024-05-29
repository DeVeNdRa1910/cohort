const express = require('express')
const jwt = require('jsonwebtoken')

const app = express()
const jwtPassword = "123456"
app.use(express.json())
const ALL_USERS = [
    {
        username: "devendra@gmail.com",
        password: "asdfasdf",
        name: "Devendra vishwakarma"
    },
    {
        username: "divyanshi@gmail.com",
        password: "asdfasdf",
        name: "Divyanshi Jain"
    },
    {
        username: "jahnvi@gmail.com",
        password: "asdfasdf",
        name: "Jahnvi Panday"
    },
]

function userExist(username, password){
    // write login to return true or false if this user exist in ALL_USERS
    // const user = ALL_USERS.find(item => (item.username===username && item.password===password))
    // OR
    let isExist = false;
    for(let i = 0; i < ALL_USERS.length ; i++){
        const user = ALL_USERS[i]
        if(user.username === username && user.password === password){
            isExist = true;
        }
    }
    return isExist;
}

app.post('/signin', function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    if(!userExist(username, password)){
        // if user not exist
        return res.status(403).json({
            msg: "user doe not exist in DB"
        })
    }

    var token = jwt.sign({username: username}, jwtPassword);
    return res.json({
        token
    })
})

app.get('/users', function(req, res){
    const token = req.headers.authorization;
    const decode = jwt.verify(token, jwtPassword);
    const username = decode.username;
    res.json({
        users: ALL_USERS.filter(value => {
            if(value.username === username){
                return false;
            } else return true;
        }) 
    })
})

app.listen(3000)