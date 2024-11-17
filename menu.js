const readline = require('readline');
const crearArchivo = require('./crear');
const leerArchivo = require('./leer');
const agregarEstudiante = require('./agregar');
const actualizarEstudiante = require('./actualizar');
const eliminarEstudiante = require('./eliminar');
const contarEstudiantes = require('./contar');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mostrarMenu() {
    console.log(`
    1. Crear archivo JSON con estudiantes
    2. Leer archivo JSON de estudiantes
    3. Agregar nuevo estudiante
    4. Actualizar información de estudiantes
    5. Eliminar un estudiante
    6. Contar estudiantes
    7. Salir
    `);

    rl.question('Seleccione una opción: ', (opcion) => {
        switch (opcion) {
            case '1':
                crearArchivo();
                mostrarMenu();
                break;
            case '2':
                leerArchivo();
                mostrarMenu();
                break;
            case '3':
                rl.question('Ingrese el ID y nombre del estudiante (formato: id,nombre): ', (input) => {
                    const [id, nombre] = input.split(',');
                    agregarEstudiante({ id: parseInt(id), nombre });
                    mostrarMenu();
                });
                break;
            case '4':
                rl.question('Ingrese el ID del estudiante y nueva información (formato: id,nombre): ', (input) => {
                    const [id, nombre] = input.split(',');
                    actualizarEstudiante(parseInt(id), { nombre });
                    mostrarMenu();
                });
                break;
            case '5':
                rl.question('Ingrese el ID del estudiante a eliminar: ', (id) => {
                    eliminarEstudiante(parseInt(id));
                    mostrarMenu();
                });
                break;
            case '6':
                contarEstudiantes();
                mostrarMenu();
                break;
            case '7':
                console.log('Secion cerrada.');
                rl.close();
                break;
            default:
                console.log('Opción inválida.');
                mostrarMenu();
        }
    });
}

mostrarMenu();
