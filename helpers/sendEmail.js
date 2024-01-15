
const nodemailer = require("nodemailer");
require("dotenv").config();
const{META_PASSWORD} = process.env;
const nodemailerConfig = {
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'ed.dvornichenko@gmail.com',
    pass: META_PASSWORD
  }
};
const transport = nodemailer.createTransport(nodemailerConfig);

const email = {
  to: "v8303881@gmail.com",
  from: "ed.dvornichenko@gmail.com",
  subject: "Test email",
  html: "<p>Test email from localhost :3000</p>"
}

const sendEmail = async data => {
  await transport
    .sendMail(email)
    .then(() => console.log('Email send success'))
    .catch(error => console.log(error.message));
  return true;
};

module.exports = sendEmail;