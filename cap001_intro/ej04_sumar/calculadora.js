const path = require('path');

let operando1 = process.argv[2];
let operando2 = process.argv[3];

if (!operando1 || !operando2) {
    // Windows: \
    // Unix: /
    const aplicacion = process.argv[1].split(path.sep).pop();

    console.error('Falta uno o dos argumentos.')
    console.error('Ejemplo: %s OPERANDO_1 OPERANDO_2', aplicacion);

    process.exit(1);
}

const suma = parseInt(operando1) + parseInt(operando2);

console.log(`La suma de ${operando1} y ${operando2} es igual ${suma}.`);
