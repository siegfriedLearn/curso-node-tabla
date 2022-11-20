const {createTable}=require('./helpers/createTable');
const argv=require('./config/yargs')

//Info recibida
console.clear();


createTable( argv.base, argv.listar, argv.hasta )
.then ( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado') )
.catch ( error => console.log(error) );
