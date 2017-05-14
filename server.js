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


    // var helper = require('sendgrid').mail;
    // var fromEmail = new helper.Email(req.body.email);
    // var toEmail = new helper.Email('morandinfo@morandtransportation.com');
    // var subject = 'Requesting info';
    // var content = new helper.Content('text/plain', 'Name: '+ req.body.firstName +' '+ req.body.lastName + '<br>'+
    //     'Phone Number: '+ req.body.phoneNumber +
    //     req.body.message);
    //
    // var mail = new helper.Mail(fromEmail, subject, toEmail, content);
    //
    // var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
    // var request = sg.emptyRequest({
    //     method: 'POST',
    //     path: '/v3/mail/send',
    //     body: mail.toJSON()
    // });
    //
    // sg.API(request, function (error, response) {
    //     if (error) {
    //         console.log('Error response received');
    //     }
    //     console.log(response.statusCode);
    //     console.log(response.body);
    //     console.log(response.headers);
    // });

    // res.end('yes')
})


// var PORT = process.env.PORT || 3000;

// app.use(express.static(path.join(__dirname, 'public')))


app.get('/', function (req, res) {
    res.sendFile('index.html');
})


app.get('/about', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
})

app.get('*', function (req, res) {
    console.log(req.get('host'));
})


// app.listen(PORT, function () {
//     console.log("Server running in PORT " + PORT);
// });
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log('IM LISTENING IS PORT ' + PORT);

})