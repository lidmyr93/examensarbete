const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const cors = require("cors")({ origin: true });
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "lidmyrm@gmail.com",
    pass: "!12qwaszx"
  }
});

exports.submitUs = functions
  .region("us-central1")
  .https.onRequest((req, res) => {
    cors(req, res, () => {
      if (req.method !== "POST") {
        return;
      }

      const mailOptions = {
        from: req.body.email,
        replyTo: req.body.email,
        to: gmailEmail,
        subject: `from my website ${req.body.email}`,
        text: req.body.message,
        html: `<p>${req.body.message}`
      };

      mailTransport.sendMail(mailOptions);

      res.status(200).end();
      // or you can pass data to indicate success.
      // res.status(200).send({isEmailSend: true});
    });
  });

exports.submitEurope = functions
  .region("europe-west1")
  .https.onRequest((req, res) => {
    cors(req, res, () => {
      if (req.method !== "POST") {
        return;
      }

      const mailOptions = {
        from: req.body.email,
        replyTo: req.body.email,
        to: gmailEmail,
        subject: `from my website ${req.body.email}`,
        text: req.body.message,
        html: `<p>${req.body.message}`
      };

      mailTransport.sendMail(mailOptions);

      res.status(200).end();
      // or you can pass data to indicate success.
      // res.status(200).send({isEmailSend: true});
    });
  });
