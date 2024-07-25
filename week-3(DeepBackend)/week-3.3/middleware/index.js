const express = require("express");

const app = express();

const port = 3000;

function isOldEnough(age) {
  return age >= 14;
}

app.get("/", function (req, res) {
  res.send("enjoy your Ride");
});

// wihtout middleware
app.get("/ride1", (req, res) => {
  if (isOldEnough(req.query.age)) {
    res.json({
      msg: "You have successfully riden ride1",
    });
  } else {
    res.status(411).json({
      msg: "You are not old enough to ride ride1",
    });
  }
});

function checkAge(req, res, next) {
  const age = req.query.age;
  if (age >= 18) {
    next();
  } else {
    res.status(411).json({
      msg: "You are not old enough to ride ride2",
    });
  }
}
//with middleware
app.get("/ride2", checkAge, function (req, res) {
  res.status(200).json({
    msg: "You have successfully riden ride2",
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
