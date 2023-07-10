# nodemailer の練習

## 使用したモジュール

- nodemailer
- dotenv(メールアドレスを格納するために使用)

## 内容

### 1.SMTP サーバの設定

以下で SMTP サーバを設定している。
Gmail の SMTP サーバを使用した。
auth のパスワードは google アカウントのパスワードではなく、
**アプリパスワード**を使用する。
詳しくは[こちら](https://support.google.com/accounts/answer/185833?hl=ja)

```javascript:SMTP
const smtp = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.MY_ACCOUNT,
    pass: process.env.MY_PASSWORD,
  },
});
```

### 2.メッセージの作成

```javascript:メッセージの作成
const message = {
  from: process.env.MY_ACCOUNT,
  to: process.env.TO_EMAIL,
  subject: "test mail",
  text: `${process.env.MY_ACCOUNT}から${process.env.TO_EMAIL}宛にメールを送信しました。`,
};
```

### 3.メッセージの送信

```javascript:メッセージの送信
smtp.sendMail(message, (error: Error) => {
    if (error) {
      console.log("send failed");
      console.log(error.message);
      return;
    }
    console.log("success!");
  });
```
