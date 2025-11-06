## This is an email server that will be sending emails directly to the email configured in .env. It is also meant to be use by a client application

## Getting started 🚀

#### Create .env file that contains the following variables

PORT=3000  
CLIENT_URL=urlOfClient  
MY_EMAIL=youremail  
SMTP_USER=yourSMTPUser  
SMTP_PASS=yourPass

## Install dependencies ⚒️

```bash
npm run install
```

## Usage 💻

All you have to do is run the command

```bash
npm run start
```

To test this, open postman or any application that can send a request. then send a post request to this link http://127.0.0.1:3000/send-email, It must have 3 required fields (name, emailAddress, message).
