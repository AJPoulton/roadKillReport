var express = require('express'),
    Mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    app = express(),
    request = require('request');

//Mongoose.connect('mongodb://localhost/*****');
app.listen(8085);

app.use(bodyParser.json());
app.use(express.static(__dirname+'/public'));

app.post("/api/getLocation", function(req, res){
    var lat = req.body.lat;
    var long = req.body.long;
    request.get('http://nominatim.openstreetmap.org/reverse?format=json&lat='+lat+'&lon='+long+'&zoom=18&addressdetails=1', function(error, response, body){
        if(!error){
            var parseBody = JSON.parse(body);
            res.status(200).json(parseBody);
        }
        else {
            res.status(418).json(error);
        }
    })
});

// app.get("/api/postLocation", function())
