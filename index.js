var http = require('http');

http.createServer(function(req, res) {
    res.end('Gerenciador de Estoque');
}).listen(3000);

