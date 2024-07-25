// creating HTTP server
// by express
// node default library => node 

//we can understand with analogy of hospital

const express = require('express'); // doing degree(MBBS)

const app = express(); //creating Hospital

function sum (n){
    let ans = 0;
    for(let i = 1 ; i <= n ; i++){
        ans = ans+i;
    }
    return ans;
}

app.get('/', function(req, res){ // creating functionality of hospital if you haave cancer then go for '/' , if you have sugar then go for '/sugar'....
    const n = req.query.n;
    const ans = sum(n)
    res.send("Hello Devendra and Janhvi Panday Your ans is " + ans)
})

app.listen(8000); // address of Hospital