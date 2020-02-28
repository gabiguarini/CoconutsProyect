var querystring = require("querystring");

function iniciar(response) 
{
    console.log("Invocar el handler de iniciar");
    var body = `
    <html>
        <head>
            <meta http-equiv="Content-Type content="text/html" charset=UTF-8" />
        </head>
        <body>
            <form action="/subir" method="post">
                <textarea name="text" rows="20" cols="60"></textarea>
                <input type="submit" value="ENviar texto"></input>
            </form>
        </body>
    </html>`;
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
};


function subir(response, datos) 
{
    console.log("Invocando al handler de subir");
    
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("Datos recibidos: " +
        querystring.parse(datos)["text"]);
    response.end();
}

exports.iniciar = iniciar;
exports.subir = subir;