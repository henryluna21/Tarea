const fs = require('fs');

function actualizarEstudiante(id, nuevaInfo) {
    try {
        const data = fs.readFileSync('estudiantes.json', 'utf8');
        const estudiantes = JSON.parse(data);
        const index = estudiantes.findIndex(e => e.id === id);
        if (index === -1) {
            console.error('Estudiante no encontrado.');
            return;
        }
        estudiantes[index] = { ...estudiantes[index], ...nuevaInfo };
        fs.writeFileSync('estudiantes.json', JSON.stringify(estudiantes, null, 2));
        console.log('Información actualizada exitosamente.');
    } catch (error) {
        console.error('Error al actualizar estudiante:', error.message);
    }
}

module.exports = actualizarEstudiante;