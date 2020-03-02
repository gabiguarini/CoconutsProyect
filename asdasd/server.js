var http = require("http");
var url = require("url");

function iniciar(route, handle) {
    function onRequest(request, response)
    {
        var postData = "";
        var pathname = url.parse(request.url).pathname;
        console.log("Request a "+ pathname +" recibido"); 

        request.setEncoding("utf8");
        
        request.addListener("data", function (datos) 
        {
            postData += datos;
            console.log("Post recibido: " + datos + ".");   
        });
        request.addListener("End", function () 
        {
            route(pathname, handle, response, postData);            
        });
    }
    http.createServer(onRequest).listen(8888);
    console.log("Serv iniciado");
    
}

exports.iniciar = iniciar ;