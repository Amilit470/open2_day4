// importing express
var express = require("express");

// Intialization 
var app = express();

//middleware

//api
//app.get('url',(req,res)={})
    app.get("/",(req,res) =>{
        res.send('Hello World!')
    });

    app.get('/login',(req,res) =>{
        res.send('Hello Amilit')

    })

//port assigning
app.listen(3001,(req,res) =>{
    console.log("port is up and running")
})