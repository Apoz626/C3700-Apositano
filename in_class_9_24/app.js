const http = require('http');
const express = require('express');
const app = express();

const server = http.createServer();

let port = 3000;
server.listen(port);
console.log(`Listening on port ${port}`);