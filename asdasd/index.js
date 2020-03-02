var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requesthandlers");

var handle = [];
handle["/"] = requestHandlers.iniciar;
handle["/iniciar"] = requestHandlers.iniciar;
handle["/subir"] = requestHandlers.subir;

server.iniciar(router.route, handle);
