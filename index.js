var express = require('express');
var app = express();

app.get('/', function (req, res){
    console.log("These is GET request for the homepage!");
    res.send('Here is the GET Method!');
})

app.post('/', function (req, res){
    console.log("A post request for the homepage is accessed.");
    res.send('Here is the POST Method!');
})

app.get('/list_user', function (req, res){
    console.log("Got a GET request for /list_user");
    res.send('This is page Listing');
})

app.get('/ab*cd', function (req, res){
    console.log("Got a request for for /ab*cd");
    res.send('Pattern match Page');
})

var server = app.listen(4001, function (){
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})