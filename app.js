const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

const nodemailer = require('nodemailer');

//send email
function sendMail(email) {
    
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'homeremodeling.ae@gmail.com',
            pass:  process.env.EMAIL_PASSWORD
        }
    });

    var mailOptions = {
        from: 'homeremodeling.ae@gmail.com',
        to: 'homeremodeling.ae@gmail.com',
        subject: 'Customer Email From Website',
        text: 'Name: ' + email.userName + '\n\nEmail: ' + email.userEmail + '\n\nMessage: ' + email.msg
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if(error) {
            console.log('Error sending email');
            console.log(error);
        } else {
            console.log('Email sent!');
        }
    });
};

app.use(express.static("public"));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.post('/', function(req, res) {
    //get data from form
    let email = {
        userName: req.body.user_name,
        userEmail: req.body.user_email,
        msg: req.body.user_msg
    };
    
    //send email
    sendMail(email);
});

app.listen(port, function() {
   console.log('Connected to port ' + port); 
});

