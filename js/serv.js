var http = require('http');

var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Привет чувырла');
});

server.listen(135, '127.0.0.1');
console.log('Порт 3000 ёпта')