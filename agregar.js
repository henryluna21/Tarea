const fs = require('fs');

function agregarEstudiante(nuevoEstudiante) {
    try {
        const data = fs.readFileSync('estudiantes.json', 'utf8');
        const estudiantes = JSON.parse(data);
        estudiantes.push(nuevoEstudiante);
        fs.writeFileSync('estudiantes.json', JSON.stringify(estudiantes, null, 2));
        console.log('Estudiante agregado exitosamente.');
    } catch (error) {
        console.error('Error al agregar estudiante:', error.message);
    }
}

module.exports = agregarEstudiante;