var mosca = require('mosca')

var moscaSettings = {
  port: 1883
};

var server = new mosca.Server(moscaSettings);
server.on('ready', setup);

server.on('clientConnected', function(client) {
    console.log('client connected', client.id);
});

// fired when a message is received
server.on('published', function(packet, client) {
  console.log('Published', packet.payload);
});

// fired when the mqtt server is ready
function setup() {
  console.log('Mosca server is up and running')
}

var mqtt = require('mqtt')
//var client = mqtt.connect()
var client = mqtt.connect({ port: 1883, host: '127.0.0.1', keepalive: 10000});

var express = require('express');
var app = express();

app.get('/punch', function (req, res) {
  res.send('Punch!!!');
  client.publish('punch', 'message root punch')
});

app.listen(8088, function () {
  console.log('Minetest connected app listening on port 8088!');
});
