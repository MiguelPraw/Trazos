'use strict'

let nodoEntrada1 = document.querySelector("#entrada1");
let nodoEntrada2 = document.querySelector("#entrada2");
let nodoImpares100 = document.querySelector("#sumaImpares100");
let nodoImparesEntre = document.querySelector("#sumaImparesEntre");

function ejecutaSuma(){
    pintaImpares();
    pintaImparesEntre();
}

function calculaImpares(){
    let suma = 0;
    for (let i = 1; i < 100; i = i + 2) {
        suma = suma + i;
    }
    return suma;
}

function calculaImparesEntre (inicio, fin){
    let suma = 0;
    for(let i = Number(inicio); i < Number(fin); i++) {
        if (esImpar(i)){
            suma = suma + i;
        }
    }
    return suma;
}

function esImpar (numero) {
    if (numero % 2 === 0) {
        return false;
    } else {
        return true;
    }
}

function pintaImpares() {
    nodoImpares100.innerHTML = "La suma de los impares hasta 100 es " + calculaImpares();
}

function pintaImparesEntre() {
    nodoImparesEntre.innerHTML = "La suma de los impares entre " + nodoEntrada1.value + " y "
    + nodoEntrada2.value + " es " + calculaImparesEntre(nodoEntrada1.value, nodoEntrada2.value);
}


