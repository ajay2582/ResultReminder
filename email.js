const nodemailer = require("nodemailer");

const notifyUser = (emailData, publishedNews) => {
  const transporter = nodemailer.createTransport({
    service: emailData.service,
    auth: emailData.auth
  });

  const mailOptions = {
    from: emailData.from,
    to: emailData.to,
    subject: emailData.subject,
    text: `${emailData.text}:\n ${emailData.link}:\n${publishedNews}`
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports = notifyUser;




// const nodemailer = require('nodemailer');

// let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'your-email@gmail.com', // Your Gmail address
//         pass: 'your-password-or-app-password' // Your Gmail password or App Password
//     }
// });

// let mailOptions = {
//     from: 'your-email@gmail.com',
//     to: 'recipient-email@example.com',
//     subject: 'Subject of your email',
//     text: 'Body of your email'
// };

// transporter.sendMail(mailOptions, function(error, info){
//     if (error) {
//         console.log(error);
//     } else {
//         console.log('Email sent: ' + info.response);
//     }
// });

