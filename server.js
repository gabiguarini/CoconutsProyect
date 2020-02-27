var http = require("http");
var url = require("url");

function iniciar(route) {
    function onRequest(request, response)
    {
        var pathname = url.parse(request.url).pathname;
        console.log("Request a "+ pathname +" recibido");
        console.log("Request recibido");

        route(pathname);
        
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write("Holis");
        response.end();
        console.log("Request terminado");
    }
    http.createServer(onRequest).listen(8888);
    console.log("Serv iniciado");
    
}

exports.iniciar = iniciar ;