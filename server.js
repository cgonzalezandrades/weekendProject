var express = require("express");
var app = express();
var PORT = process.env.PORT || 3001;
var path = require('path');
var router = express.Router();

 app.use(express.static(__dirname));

app.all('/', function(req, res) {
    res.sendFile(__dirname+'/index.html');
});

// app.get('/about', function (req, res) {
//
//     res.sendFile(__dirname + '/views/about.html');
// })


app.listen(PORT, function () {
    console.log("Server running in PORT " + PORT);
});

