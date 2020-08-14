const descripcion = {
    demand:true,
    alias: 'd',
};
const completado = {
    alias: 'c',
    default: true,
}

const argv = require('yargs')
    .command('crear', 'crear elemento de la lista por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza un elemento por hacer', {
        descripcion,
        completado
      })
    .command('borrar', 'borrar una tarea', {
        descripcion,
        completado
      })
    .help()
    .argv;


module.exports ={
    argv
}