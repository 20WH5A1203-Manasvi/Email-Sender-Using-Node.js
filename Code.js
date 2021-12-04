// include nodemailer
const nodemailer = require('nodemailer');
// declare vars
let fromMail = 'sendername@gmail.com';
let toMail = 'receivername@gmail.com';

let subject  = 'An email using nodejs app';
let text = "My name is Keerthi,Thank you for Helping me!!" 

// auth
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'sendername@gmail.com',
        pass: '******'
    }
});

// email options
let mailOptions = {
    from: fromMail,
    to: toMail,
    subject: subject,
    text: text
};

// send email
transporter.sendMail(mailOptions, (error, response) => {
    if (error) {
        console.log(error);
    }
    console.log(response)
});
