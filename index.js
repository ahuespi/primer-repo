const http = require("http");
const fs = require("fs");

http.createServer(function(request, response) {
    const dir = "public/";
    // const url = request.url;

    if (request.url == "/") {
        const file = "index.html";
    } else {
        const file = request.url;
    }

    const file = (request.url == "/") ? "index.html" : request.url;

    
    // fs.readFile(RUTA, ACCION);
    fs.readFile(dir + file, function(error, content) {
        if ( error ) { // <-- Si no pudo leer el archivo por X razon,
            response.end("Archivo no encontrado :(")
        } else {
            response.writeHead(200, { "Content-Type" : "text/html" });
            response.end(content);
        }
    });
}).listen(80);