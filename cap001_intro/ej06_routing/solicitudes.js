const http = require('http');

const routes = {
    '/': function index(request, response) {
        response.writeHead(200);
        response.end('NodeJS');
    },
    '/saludo': function saludar(request, response) {
        response.writeHead(200);
        response.end('¡Hola!');
    }
}

http.createServer(function (request, response) {
    if (request.url in routes) {
        return routes[request.url](request, response);
    }

    response.writeHead(404);
    response.end(http.STATUS_CODES[404]);
}).listen(2137);
