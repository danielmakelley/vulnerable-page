const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer((req, res) => {
    const query = url.parse(req.url, true).query;

    // Reflective XSS
    if (query.name) {
        res.write(`<h1>Hello, ${query.name}</h1>`); // No sanitization
    }

    // Open Redirect
    if (query.redirect) {
        res.writeHead(302, { 'Location': query.redirect }); // No validation
        res.end();
    }

    // Local File Inclusion
    if (query.file) {
        fs.readFile(query.file, 'utf8', (err, data) => {
            if (err) {
                res.write('Error reading file');
            } else {
                res.write(data); // No validation
            }
            res.end();
        });
    } else {
        res.end();
    }
}).listen(8080);
