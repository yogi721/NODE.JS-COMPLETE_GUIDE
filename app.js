const http = require('http');

// create server: arrow function
const server = http.createServer((req, res) => {
    console.log(req);
});

server.listen(3000);