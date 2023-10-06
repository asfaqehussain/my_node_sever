require('dotenv').config();
const express = require("express");
var app = express();
const chat = require('./chat');

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get("/", function (request, response) {
    response.send("Server Running");
})

app.get("/gettoken/:userName", function (request, response) {
    let userName = request.params.userName;
    let token = chat.getToken(userName);
    response.send(JSON.stringify(token));
    // response.send("Hello World! get");
})

app.listen(3000, function () {
    console.log("Started application on port %d", 3000);
});



// const express = require("express");
// const { MessagingResponse } = require("twilio").twiml;

// const app = express();

// app.post("/api/message", (req, res) => {
//   const twiml = new MessagingResponse();
//   twiml.message("Hello from Vercel!");

//   res.writeHead(200, { "Content-Type": "text/xml" });
//   res.end(twiml.toString());
// });

// module.exports = app;