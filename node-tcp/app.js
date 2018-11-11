const fs = require('fs');
const net = require('net');
const shortid = require('shortid');

const tcpServer = net.createServer();
tcpServer.on('connection', function(sock) {
    console.log('start connection');

    sock.on('data', function(data) {
        fs.writeFile(`./output/data-${shortid.generate()}.bin`, data, function(error) {
            console.log('data written')
        });
    });
});

tcpServer.listen(5000);
