const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
    break;
    case 'listar':
        let listado = porHacer.getListado();
        
    for ( let porHacer of listadoPorHacer) {
        console.log('=================='.green);
        console.log(porHacer.descripcion);
        console.log('Estado: ', porHacer.completado);
        console.log('=================='.green);
    }
    break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
    break;
    case 'borrar':
        let borrar = porHacer.borrar(argv.descripcion);
        console.log(borrar);
    break;
    default:
        console.log('comando no reconocido');
}