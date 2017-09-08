var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "edutilosaghayev@gmail.com",
        pass: "edutilos1991"
    }
});



var mailOptions = {
    from: "edutilosaghayev@gmail.com",
    to: "Nijat.Aghayev@ruhr-uni-bochum.de, foobar666@inbox.ru",
    subject: "Test From nodejs",
    html: "<h3>Hello from nodejs</h3>"
};

transporter.sendMail(mailOptions, function(err, info) {
    if(err) {
        console.log(err);
    } else {
        console.log("transporter response: ",info.response);
    }
});
