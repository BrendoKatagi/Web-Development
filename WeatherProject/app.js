const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req, res){
    const url = "http://api.openweathermap.org/data/2.5/forecast/daily?q=Sao%20Paulo&appid=c85446ae4c3c824ead6aded5f3bbf12c&units=metric";
    https.get(url, function(response){
        console.log(response);
    })

    res.send("Server is up and running.")
})

app.listen(3000, function(){
    console.log("Server is running on port 3000")
})