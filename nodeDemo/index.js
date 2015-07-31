var http = require('http');
var ipAddr = '192.168.0.107';
var port = 1337;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type':'text/plain'});
  res.end('Hello Andre\n'+new Date);
}).listen(port, ipAddr);
console.log('Server running at '+ ipAddr + ':' + port);

