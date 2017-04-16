/**
 * Created by carlosgonzalez on 4/14/17.
 */
/**
 * Created by carlosgonzalez on 4/14/17.
 */
var express = require('express');
var app = express();
var path = require('path');
var PORT = process.env.PORT || 3000;

// app.use(express.static(path.join(__dirname, 'public')))

app.use(express.static(__dirname + '/public'));

app.get('/', function (req,res) {
    res.sendFile('index.html');
})


app.get('/about', function (req,res) {
    res.sendFile(__dirname+'/public/index.html');
})



app.listen(PORT, function () {
    console.log("Server running in PORT " + PORT);
});
