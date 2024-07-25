const express = require('express')
const zod = require('zod')
const app = express()
// zod is basically authenticate input fields 
//what is kidney here array of numbers 
// vary usefull to validate inputfield
const schema = zod.array(zod.number());

/* 
make zod schema for 
{
    email: Struing -> email
    password: atleast 8 letters
    countyr: "IN", "US"
}
const schema = zod.object({
    email: zod.String().email(),
    password: zod.String().min(8), // password should have atleast 8 latters
    country: zod.litral("IN").or(zod.litral("US"))
})
*/
const userSchema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8), // password should have atleast 8 latters
})

app.use(express.json())

app.post('/authCheckWithZod', function(req, res){
    const user = req.body.user
    const response = userSchema.safeParse(user)
    if(!response.success){
        res.send({
            response
        })
        return;
    }
    res.send(user, "user created successfully")
})

app.post('/health-checkup', function(req, res){
    // kidney -> array of number like = [1,2]
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys)
    if(!response.success){
        res.send({
            response
        })
        return;
    }
    res.send("your Kidney are good")
});

app.listen(3000);