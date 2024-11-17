const fs = require('fs');

function contarEstudiantes() {
    try {
        const data = fs.readFileSync('estudiantes.json', 'utf8');
        const estudiantes = JSON.parse(data);
        console.log(`Número de estudiantes: ${estudiantes.length}`);
    } catch (error) {
        console.error('Error al contar estudiantes:', error.message);
    }
}

module.exports = contarEstudiantes;