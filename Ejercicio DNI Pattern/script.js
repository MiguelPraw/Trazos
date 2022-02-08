'use strict'

let nodoDNI = document.querySelector("#dni");
let nodoResultado = document.querySelector("#resultado");

const INDICE = 23;

const arrayLetras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

let pattern = /^([0-9]{1,8})(\-{0,1})([a-z]{1})$/gi;

let patternNumero = /[0-9]{1,8}/gi;
let patternLetra = /[a-z]{1}/gi;

function ejecutaDNI () {
    let dni = nodoDNI.value;
    if (pattern.test(dni)) {
        let numero = Number(dni.match(patternNumero));
        let letra = String(dni.match(patternLetra));
        let letraAsignada = devuelveLetraDNI(numero);
        if (letraAsignada === letra.toLocaleUpperCase()) {
            nodoResultado.innerHTML = "El número y la letra introducidos son correctos.";
        } else {
            nodoResultado.innerHTML = "La letra introducida no se corresponde con el número.";
        }
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