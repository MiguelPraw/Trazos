'use strict'

let nodoNumero = document.querySelector("#numero");
let nodoLetra = document.querySelector("#letra");
let nodoResultado = document.querySelector("#resultado");

const INDICE = 23;

const arrayLetras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

function ejecutaDNI () {
    if (compruebaDNI(Number(nodoNumero.value))) {
        let letraDNI = devuelveLetraDNI(Number(nodoNumero.value));
        if (letraDNI === nodoLetra.value) {
            nodoResultado.innerHTML = "El número y la letra introducidos son correctos.";
        } else {
            nodoResultado.innerHTML = "La letra introducida no se corresponde con el número."
        }
    } else {
        nodoResultado.innerHTML = "El número introducido no es correcto.";
    }
}

function compruebaDNI (dni) {
    if (dni < 0 || dni > 99999999) {
        return false;
    } else {
        return true;
    }
}

function devuelveLetraDNI (dni) {
    return arrayLetras[dni%INDICE];
}