const bodyParser = require("body-parser")
const express = require("express");
const request = require("request");
const https = require("https");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res){
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;

    const data = {

        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };

    const jsonData = JSON.stringify(data);
    const url = "https://us1.api.mailchimp.com/3.0/lists/a8d527a297";
    
    const options = {
        method: "POST",
        auth: "brendokatagi:1ee6b942f4417f89d464e81fb4b22777-us1"
    };

    const request = https.request(url, options, function(response){
        
        if (response.statusCode === 200){
            res.sendFile(__dirname + "/success.html");
        } else {
            res.sendFile(__dirname + "/failure.html");
        }
        
        response.on("data", function(data){
            console.log(JSON.parse(data));
        })
    });

    //request.write(jsonData);
    request.end();

    //console.log(firstName, lastName, email);
});

app.post("/failure", function(req, res ){
    res.redirect("/");
});

app.listen(3000, function(){
    console.log("Server is running on port 3000");
});

//API KEY
//1ee6b942f4417f89d464e81fb4b22777-us1

// List ID
// a8d527a297