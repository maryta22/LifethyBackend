var mailer = require('nodemailer')

//Transportador para el correo
var mailTransportador =  mailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "darwimaras085@gmail.com", 
      pass: "proyecto085", 
    },
  });

module.exports = mailTransportador;