const http = require("http"); 
const port = 2000;

// Crear las reglas ↓
// function (peticion, respuesta)
http.createServer(function(peticion, respuesta) {

    respuesta.setHeader("Content-Type", "text/html");
    
    respuesta.end("Hola <strong>Node.js</strong>");

}).listen(port);






