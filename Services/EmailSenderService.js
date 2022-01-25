const nodemailer = require('nodemailer');

module.exports = class EmailSender {
  static async sendMail(mail, mailBody) {
    const transporter = nodemailer.createTransport({
      service: 'yahoo',
      auth: {
        user: 'test.testmail22@yahoo.com',
        pass: 'xydrjwrtmyedsdoe',
      },
    });
    await transporter.sendMail({
      from: 'test.testmail22@yahoo.com',
      to: mail,
      subject: 'Hello ✔',
      text: mailBody,
      html: `<b>${mailBody}</b>`,
    });
  }
};
