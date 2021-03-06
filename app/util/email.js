/**
 * Created by chanaka on 11/17/15.
 */
var nodemailer = require("nodemailer");

/**
 * Creating global function to send email.
 * @type {{sendMail: Function}}
 */
module.exports = {
    sendMail: function (reciever) {

        var transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'chanu1993@gmail.com',
                pass: 'pwdhere'
            }
        });

        var mailOptions = {
            from: 'MintBlogger ✔ <foo@blurdybloop.com>',
            to: reciever,
            subject: 'WELCOME TO BLOGGER ✔',
            text: 'Hello world ✔',
            html: '<div style="padding-left: 50px;padding-right: 50px;">' +
            '<div style="width:100%;height:100%;-webkit-border-radius: 30px;-moz-border-radius: 30px;border-radius: 30px;border:1px solid #3C0963;background-color:#f6f6f6;-webkit-box-shadow: #A486B3 8px 8px 8px;-moz-box-shadow: #A486B3 8px 8px 8px; box-shadow: #A486B3 8px 8px 8px;">' +
            '<h2 style="text-align: center;color: #3C0963">Welcome to blogger</h2>' +
            '<h4 style="text-align: center;color: #3C0963">The next generation customizable blogging platform</h4>' +
            '<hr>' +
            '<div style="padding-left: 20px;padding-right: 20px;color: #1e4872">' +
            '<h4>Hello , </h4>' +
            '<h5>Thank you for selecting this blogging platform. You can Create a beautiful blog that fits your style.' +
            'Choose from easy-to-use templates with flexible layouts and hundreds of background images, or edit your' +
            'blog’s CSS and HTML to create something entirely unique. If you’re using your blog for a brand or' +
            'business, you can create a custom domain that’s easy for people to find and follow.</h5>' +
            '<hr>' +
            '<h4>Some of the key features you can enjoy with us , </h4>' +
            '<div style="float: right">' +
            '<img style="max-width: 200px;" src="https://www.blogger.com/img/features/design.png" alt="Image"/>' +
            '</div>' +
            '<ul>' +
            '<li>Manage & post on the go</li>' +
            '<li>Drag & drop mobile blogging</li>' +
            '<li>Easily add text, photos, and videos</li>' +
            '<li>Share to Facebook & Twitter with one click</li>' +
            '<li>Moderate blog comments & form entries</li>' +
            '<li>Access detailed site stats</li>' +
            '</ul>' +
            '<hr>' +
            '<p style="text-align: center">We are keeping values your privacy. If you wish to stop receiving these emails, click here to unsubscribe.</p>' +
            '</div>' +
            '</div>' +
            '</div>' +
            ''
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: ' + info.response);

        });
    }
};
