
let texto = "Hola mundo JavaScript con reduce y metodos de array!!";
let arrayResultado = [];

function cuentaNumLetras (letra) {
    let nLetras = 0;
    for (let i = 0; i < texto.length; i++) {
        if (letra === texto[i]) {
            nLetras++;
        }
    }
    return nLetras;
}

function cuentaLetras () {

    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i];
        if (!arrayResultado.includes(letra)) {
            arrayResultado.push(letra);
        }
    }
    let nuevo = arrayResultado.map( (cadaLetra) => {
        return {letra: cadaLetra, numero: 0};
    });
    nuevo.forEach( (cadaObjeto) => {
        for (let i = 0; i < texto.length; i++) {
            if (cadaObjeto.letra === texto[i]) {
                cadaObjeto.numero++;
            }
        }
    });
    console.log(nuevo);
}

let objeto_resultado = {};

function cuentaLetrasFilter () {
    for (let i = 0; i < texto.length; i++) {

        let filtro_letra = arrayResultado.filter ( cadaLetra => {
            return cadaLetra.letra !== texto[i];
        });

        if (filtro_letra.length === 0) {
            objeto_resultado[ texto[i] ] = cuentaNumLetras( texto [i]);
        }
    }
    console.log(objeto_resultado);
}

function cuentaLetrasObjeto () {
    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i];
        if (objeto_resultado [letra]) {
            objeto_resultado[letra] += 1;
        } else {
            objeto_resultado [letra] = 1;
        }
    }
    console.log(objeto_resultado);
}


function cuentaLetrasReduce () {
    let arrayTexto = texto.split('');
    const resultado = arrayTexto.reduce( (acumulador, actual) => {
        if (acumulador[actual]) {
            acumulador[actual] += 1;
        } else {
            acumulador[actual] = 1;
        }
        return acumulador;
    }, {});
    console.log(resultado);
}

cuentaLetrasReduce();