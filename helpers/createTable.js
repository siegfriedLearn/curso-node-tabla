const fs = require('fs');
const colors=require('colors');

console.clear();

const createTable = async (base = 5, listar= false, hasta=10) => {

    try {


        let salida = '';

        for (let index = 1; index <= hasta; index++) {
            salida += `${base} X ${index} = ${base * index} \n`
        }
        if (listar) {
            console.log('==============')
            console.log(colors.blue(` Tabla del ${base}`))
            console.log('==============')
            console.log(colors.green.underline(salida))
        }


        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)

        return (`tabla-${base}.txt`)

    } catch (err) {
        throw err
    }



}

module.exports = { createTable };