require("dotenv").config();

const email = {
  service: process.env.SERVICE,
  auth: {
    user: process.env.USEREMAIL,
    pass: process.env.PASSWORDEMAIL
  },
  from: process.env.USEREMAIL,
  to: process.env.TO,
  subject: "A new evidence was found",
  text: `Check it on the website  , Your Semester End result has came  \n  HERE IS THE LINK   `,
  link: "https://results.vtu.ac.in/"
};

// const pageURL = "https://results.vtu.ac.in/";
const pageURL = "https://results.vtu.ac.in/";

const mongoURI = process.env.MONGOURI;

module.exports = {
  email,
  pageURL,
  mongoURI
};
