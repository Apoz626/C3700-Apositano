const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const adminRoutes = require('./routes/admin');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(adminRoutes);
app.use( '/', ( req, res, next ) => { // route
    res.send("<h1>Page not found</h1>")
})

const server = http.createServer(app);
const port = 3000;
server.listen(port );
console.log(`Listening on port ${port}`);