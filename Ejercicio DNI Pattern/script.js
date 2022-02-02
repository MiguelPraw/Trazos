'use strict'

let nodoDNI = document.querySelector("#dni");
let nodoResultado = document.querySelector("#resultado");

const INDICE = 23;

const arrayLetras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

let pattern = /([0-9]{1,8})(\-{0,1})([a-z]{1})/gi;

let patternNumero = /[0-9]{1,8}/gi;
let patternLetra = /[a-z]{1}/gi;

let texto = "Hola mundo JavaScript con reduce y metodos de array!!";
let arrayResultado = [];

function ejecutaDNI () {
    let dni = nodoDNI.value;
    if (pattern.test(dni)) {
        console.log(dni.match(pattern));
        console.log(Number(dni.match(pattern)));
    } else {
        nodoResultado.innerHTML = "El formato no es valido";
    }
}

function devuelveLetraDNI (dni) {
    return arrayLetras[dni%INDICE];
}

function sema () {
        let letraDNI = devuelveLetraDNI(Number(nodoNumero.value));
        if (letraDNI === nodoLetra.value) {
            nodoResultado.innerHTML = "El número y la letra introducidos son correctos.";
        } else {
            nodoResultado.innerHTML = "La letra introducida no se corresponde con el número."
        }
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

function cuentaLetrasFilter () {
    let resultado = texto.filter( (letra) => {
        
    });
}

cuentaLetras();



/*
{
    a:10,
    b:2,
}

*/