require('dotenv').config();

const express = require('express');
// const AccessToken = require('twilio').jwt.AccessToken;
// const ChatGrant = AccessToken.ChatGrant;

const app = express();

app.get('/', (req, res) => {
  res.send(`Hey, this is my API running 🥳 ${process.env.TWILIO_ACCOUNT_SID},${process.env.TWILIO_API_KEY},${process.env.TWILIO_API_SECRET}`);
});

// app.get('/token/:identity', (req, res) => {
//   const identity = req.params.identity;
//   const token = new AccessToken(
//     process.env.TWILIO_ACCOUNT_SID,
//     process.env.TWILIO_API_KEY,
//     process.env.TWILIO_API_SECRET
//   );

//   token.identity = identity;
//   token.addGrant(
//     new ChatGrant({
//       serviceSid: process.env.TWILIO_CHAT_SERVICE_SID,
//     })
//   );

//   res.send({
//     identity: token.identity,
//     jwt: token.toJwt(),
//   });
// });

// app.listen(3001, () => {
//   console.log('Programmable Chat server running on port 3001!');
// });

export default app;







// Simple code for testing

// const express = require('express');

// const app = express();
// const PORT = 4000;

// app.listen(PORT, () => {
//   console.log(`API listening on PORT ${PORT} `);
// })

// app.get('/', (req, res) => {
//   res.send('Hey this is my API running 🥳');
// })

// app.get('/about', (req, res) => {
//   res.send('This is my about route..... ');
// })