const express = require('express');
const http = require('http');
const { ExpressPeerServer } = require('peer');

const app = express();
const server = http.createServer(app);
const peerServer = ExpressPeerServer(server, { debug: true });

app.use('/peerjs', peerServer);

server.listen(3001, () => {
  console.log('PeerJS server is running on port 3001');
});
