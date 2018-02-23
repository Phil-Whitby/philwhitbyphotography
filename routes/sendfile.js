var express = require('express');
var router = express.Router();

var nodemailer = require('nodemailer');


/* GET home page. */
router.post('/', function(req, res, next) {
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'philwhitbyphotography@gmail.com',
        pass: 'z4n6myk8'
      }
    });

    var mailOptions = {
      to: 'philwhitbyphotography@gmail.com',
      subject: 'you got mail!',
      text: req.body.name + ' <' + req.body.email + '> ' + req.body.msg
    };
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

    res.send('Thank you for your message!');

});

module.exports = router;
