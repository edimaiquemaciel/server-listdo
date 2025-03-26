const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Lê o db.json da raiz
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

module.exports = server;