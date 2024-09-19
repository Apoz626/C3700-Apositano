const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    // event handler code
    const url = req.url;
    const method = req.method;

    if (url === "/") {
        res.setHeader('content-type', 'text/html; charset=utf-8');
        res.write(`<html><body><h2>URL:${url}</h2>`)
        res.write("<form method='POST' action='/message'>");
        res.write("<br/> Message <input type='text' name='msg' placeholder='message is there'/>");
        res.write("<br/> <button type='submit'>Submit it</button>")
        res.write(`</form></body></html>`);
        res.end();
    }
    else if (url === '/message' && method === "POST") {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log("--->>");
            console.log(parsedBody);
            res.setHeader('content-type', 'text/html; charset=utf-8');
            res.write(`<html><body><h2>Message Received</h2>`)
            res.write(`body: ${parsedBody}`);
            res.write("</body></html>");
            res.end();
        });
        // res.setHeader('content-type', 'text/html; charset=utf-8');
        // res.write(`<html><body><h2>Message Received</h2>`)
        // res.write("How do I get the message?");
        // res.write("</body></html>");
        // res.end();
    }
    else if (url === '/message' && method === "GET") {
        res.setHeader('content-type', 'text/html; charset=utf-8');
        res.write(`<html><body><h2>GET THE MESSAGE</h2>`)
        res.write("Still don't know how to get the message");
        res.write("</body></html>");
        res.end();
    }
    else {
        res.setHeader('content-type', 'text/html; charset=utf-8');
        res.write(`<html><body><h2>Unknown Path:${url}</h2>`)
        res.write(`</body></html>`);
        res.end();
    }
});
const PORT = 5000;
console.log(`Listening on port: ${PORT}`);
server.listen(PORT);