// require('dotenv').config();

// // const Twilio = require('twilio');
// const express = require('express');
// // console.log('process.env', process.env);

// const app = express();
// const AccessToken = require('twilio').jwt.AccessToken;
// // const AccessToken = Twilio.jwt.AccessToken;
// const ChatGrant = AccessToken.ChatGrant;

// app.get('/', (req, res) => {
//   res.send('Hey this is my API running 🥳')
// })

// app.get('/token/:identity', (req, res) => {
//   const identity = req.params.identity;
//   const token = new AccessToken(
//     process.env.TWILIO_ACCOUNT_SID,
//     process.env.TWILIO_API_KEY,
//     process.env.TWILIO_API_SECRET,
//   );
//   console.log('process.env', process.env);

//   token.identity = identity;
//   token.addGrant(
//     new ChatGrant({
//       serviceSid: process.env.TWILIO_CHAT_SERVICE_SID,
//     }),
//   );

//   res.send({
//     identity: token.identity,
//     jwt: token.toJwt(),
//   });
// });

// app.listen(3001, function () {
//   console.log('Programmable Chat server running on port 3001!');
// });












const express = require('express');

const app = express();
const PORT = 4000;

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `);
})

app.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳');
})

app.get('/about', (req, res) => {
  res.send('This is my about route..... ');
})