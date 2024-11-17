const fs = require('fs');

function eliminarEstudiante(id) {
    try {
        const data = fs.readFileSync('estudiantes.json', 'utf8');
        const estudiantes = JSON.parse(data);
        const nuevosEstudiantes = estudiantes.filter(e => e.id !== id);
        fs.writeFileSync('estudiantes.json', JSON.stringify(nuevosEstudiantes, null, 2));
        console.log('Estudiante eliminado exitosamente.');
    } catch (error) {
        console.error('Error al eliminar estudiante:', error.message);
    }
}

module.exports = eliminarEstudiante;