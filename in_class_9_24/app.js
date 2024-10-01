const http = require('http');
const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log("Inside this middleware");
    next();
});
app.use((req, res, next) => {
    console.log("Hello again");
    res.send(`<h1>Hello World</h1>`)
});

const server = http.createServer(app);
let port = 3000;
server.listen(port);
console.log(`Listening on port ${port}`);