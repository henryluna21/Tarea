const fs = require('fs');

function crearArchivo() {
    const estudiantes = [];
    fs.writeFileSync('estudiantes.json', JSON.stringify(estudiantes, null, 2));
    console.log('Archivo JSON creado exitosamente.');
}

module.exports = crearArchivo;