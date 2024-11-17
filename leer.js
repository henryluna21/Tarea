const fs = require('fs');

function leerArchivo() {
    try {
        const data = fs.readFileSync('estudiantes.json', 'utf8');
        const estudiantes = JSON.parse(data);
        console.log('Contenido del archivo:', estudiantes);
    } catch (error) {
        console.error('Error al leer el archivo:', error.message);
    }
}

module.exports = leerArchivo;