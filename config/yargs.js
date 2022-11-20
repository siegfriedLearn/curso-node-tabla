const argv=require('yargs')
        .options({
            'b': {
            alias: 'base',
            type: 'number',
            demandOption: true,
            description: 'Es la base de la tabla de multiplicar'
        },
        'l':{
            alias: 'listar',
            type: 'boolean',
            default: false,
            description: 'Muestra la tabla en consola'
        },
        'h':{
            alias: 'hasta',
            type: 'number',
            description: 'Hasta qué número debe multiplicar',
            default: 10
        }
        })
        .check( ( argv, options )=>{
            if( isNaN(argv.b) ){
                throw 'La base tiene que ser un número'
            }
            return true
        })
        .argv;

module.exports= argv;