const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

//connect our Backend with MongoDB with the help of mongoose
mongoose
  .connect("mongodb://localhost:27017/user_app")
  .then(() => {console.log("Connected to MongoDB");})
  .catch((err) => {console.error("Error connecting to MongoDB", err);});
//mongodb://localhost:27017/

const userSchema = new mongoose.Schema({
  name: String,
  username: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

const app = express();
const jwtPassword = "123456";
app.use(express.json());

app.post("/signup", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;

  // first check from that data any other user exist or not in DB
  const existingUser = await User.findOne({ username: username });
  //Here we assume not exist
  if (existingUser) {
    res.status(400).send("user with this email already exist");
  } else {
    const user = new User({
      username,
      password,
      name,
    });
    user.save();
    return res.json({
      msg: "user created successfully",
    });
  }
});

/* async function userExist(username, password){
    // write login to return true or false if this user exist in ALL_USERS
    // const user = ALL_USERS.find(item => (item.username===username && item.password===password))
    // OR
    let ALL_USERS = await User.find()
    let isExist = false;
    for(let i = 0; i < ALL_USERS.length ; i++){
        const user = ALL_USERS[i]
        if(user.username === username && user.password === password){
            isExist = true;
        }
    }
    return isExist;
} */

async function userExist(username, password) {
  const user = await User.findOne({ username, password });
  return user !== null;
  // if user not exist then return true else if user exist in DB then return false
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExist(username, password)) {
    // if user not exist
    return res.status(403).json({
      msg: "user don't exist in DB",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", async function (req, res) {
  const token = req.headers.authorization;
  const decode = jwt.verify(token, jwtPassword);
  const username = decode.username;
  const ALL_USERS = await User.find();
  console.log(ALL_USERS);
  res.json({
    users: ALL_USERS.filter((value) => {
      if (value.username === username) {
        return false;
      } else return true;
    }),
  });
});

app.listen(3000);
