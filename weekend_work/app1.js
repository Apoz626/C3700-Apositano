const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/login', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'public/login.html'));
})

app.post('/access', (req, res, next) => {
    let userId = req.body.userId;
    let password = req.body.password;

    if (userId === 'Jack' && password === 'BeQuick') {
        res.sendFile(path.join(__dirname, 'public/access.html'));
    }
    else {
        res.sendFile(path.join(__dirname, 'public/noAccess.html'));
    }
})

app.use('/', (req, res, next) => {
    res.send('<h1>Page not Found</h1>');
})

const server = http.createServer(app);
const port = 4000;
server.listen(port);
console.log(`Listening on port: ${port}`);