var path = require('path')

let nombre = process.argv[2];

if (!nombre) {
    let nombreAplicacion = process.argv[1].split(path.sep).pop();

    console.error('Falta un argumento. Ejemplo: %s NOMBRE', nombreAplicacion);

    process.exit(1);
}

console.log(`¡Hola ${nombre}!`);
