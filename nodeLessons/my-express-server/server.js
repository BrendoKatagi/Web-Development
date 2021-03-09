const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.send("Hello");
});

app.get("/contact", function(req, res){
    res.send("Contact me at brendo.katagi@gmail.com")
});