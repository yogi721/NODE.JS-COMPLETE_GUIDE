const http = require('http');

// create server: arrow function
const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);

});

server.listen(3000);