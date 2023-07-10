import nodemailer from "nodemailer";
import "dotenv/config";

//SMTPサーバの生成
const smtp = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.MY_ACCOUNT,
    pass: process.env.MY_PASSWORD,
  },
});

const message = {
  from: process.env.MY_ACCOUNT,
  to: process.env.TO_EMAIL,
  subject: "test mail",
  text: `${process.env.MY_ACCOUNT}から${process.env.TO_EMAIL}宛にメールを送信しました。`,
};

try {
  smtp.sendMail(message, (error: Error) => {
    if (error) {
      console.log("send failed");
      console.log(error.message);
      return;
    }
    console.log("success!");
  });
} catch (e) {
  console.log("Error", e);
}
