const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));
app.get( '/add-product', ( req, res, next ) => { // route
    res.sendFile(path.join(__dirname, 'public/productForm.html'));
})
app.post( '/product', ( req, res, next ) => { // route
    let title = req.body.title;
    if (req.body.title === 'john') {
        res.sendFile(path.join(__dirname, 'public/product.html'));
    }
    else {
        res.send(`Selection: ${req.body.title} Author: ${req.body.author}`);
    }
    // console.log(req.body);
    // res.redirect("/");
    // res.send(`Selection: ${req.body.title} Author: ${req.body.author}`);
    // if (req.body.title === 'John') {
    //     res.send(`Selection: ${req.body.title} Author: ${req.body.author}`);
    // }
    // else {
    //     res.send('bad title');
    // }
})
app.use( '/', ( req, res, next ) => { // route
    res.send("<h1>Page not found</h1>")
})

const server = http.createServer(app);
const port = 3000;
server.listen(port );
console.log(`Listening on port ${port}`);