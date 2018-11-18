const fs = require('fs');
const net = require('net');
const shortid = require('shortid');

const tcpServer = net.createServer();
tcpServer.on('connection', function(socket) {
    console.log('start connection');
    console.log(socket.remoteAddress);

    try {
        socket.on('data', function(data) {
            fs.writeFile(`./output/data-${shortid.generate()}.bin`, data, function(error) {
                console.log('data written')
            });
        });
    } catch(error) {
        console.log(error);
    }

});

tcpServer.listen(5000);
