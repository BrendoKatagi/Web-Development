const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req, res){
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Sao Paulo&appid=c85446ae4c3c824ead6aded5f3bbf12c&units=metric";
    https.get(url, function(response){
        console.log(response.statusCode);

        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imgUrl = "http://openweathermap.org/img/wn/" + icon + ".png" 

            res.write("<p>The weather is currently: " + weatherDescription + " </p>");
            res.write("<h1>The temperature in Sao Paulo is " + temp + " degrees Celsius</h1>");
            res.write("<img src='"+ imgUrl +"'>");
            res.send();
        })
    })

})

app.listen(3000, function(){
    console.log("Server is running on port 3000")
})