var express = require("express")
var app = express()

// respond with "hello world" when a GET request is made to the home page
app.get("/",function(req,res){
    res.send("Hello world")
})

// Listen to a particular port
app.listen(3000)