/**
 * Created by carlosgonzalez on 4/14/17.
 */
/**
 * Created by carlosgonzalez on 4/14/17.
 */
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/', function (req, res, next) {

    console.log(req.body);

    if(req.body.message == undefined){
        req.body.message = 'no message provided';
    }


    var helper = require('sendgrid').mail;
    var fromEmail = new helper.Email('morandinfo@morandtransportation.com');
    var toEmail = new helper.Email('morandinfo@morandtransportation.com');
    var subject = 'Requesting info';
    var content = new helper.Content('text/html',
        '<h2>Name:</h2> '+'<h3>'+ req.body.firstName +' '+ req.body.lastName +'</h3>'+
        '<h2>Phone Number:</h2> '+'<h3>'+ req.body.phoneNumber +'</h3>'+
        '<h2>Email:</h2> ' + req.body.email +
        '<h3>'+req.body.message +'</h3>');

    var mail = new helper.Mail(fromEmail, subject, toEmail, content);

    var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
    var request = sg.emptyRequest({
        method: 'POST',
        path: '/v3/mail/send',
        body: mail.toJSON()
    });

    sg.API(request, function (error, response) {
        if (error) {
            console.log('Error response received');
        }
        console.log(response.statusCode);
        console.log(response.body);
        console.log(response.headers);
    });

})




app.get('/', function (req, res) {
    res.sendFile('index.html');
})


app.get('/about', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
})

app.get('*', function (req, res) {
    console.log(req.get('host'));
})


var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log('IM LISTENING IS PORT ' + PORT);

})