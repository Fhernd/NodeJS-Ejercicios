const express = require('express');

const app = express();

const puerto = 3000;

app.get('/', function (request, response) {
    response.send('¡Hola... Mundo!');
});

app.listen(puerto, function() {
    console.log('El servidor está escuchando en la URL http://localhost:' + puerto);
});
