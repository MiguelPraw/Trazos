'use strict'

const arrayNumeros = [1, 4, 6, 3, 6, 2, 1, 12, 5, 7];
let i;

let nodoMayorQue10 = document.querySelector("#mayorQue10");
let nodoNumeroMaximo = document.querySelector("#numeroMaximo");

function pintaMayorQue10 () {
    i = 0;
    let mayorQue10 = hayMayorQue10();
    nodoMayorQue10.innerHTML = "Hay un numero mayor que 10, es el " + mayorQue10 + " y está en la posición " + i;
}    

function pintaNumeroMaximo () {
    nodoNumeroMaximo.innerHTML = "El número máximo es el " + hallarNumeroMaximo(arrayNumeros);
}


function hayMayorQue10 () {
    let encontrado = false;
    while (!encontrado && i < arrayNumeros.length) {
        if (arrayNumeros[i] > 10) {
            encontrado = true;
        } else {
            i++;
        }
    }
    return arrayNumeros[i];
}

function hallarNumeroMaximo (array) {
    let numeroMaximo = 0;
    for (let i = 0; i < array.length; i++) {
        let aux = array[i];
        if (aux > numeroMaximo) {
            numeroMaximo = aux;
        }
    }
    return numeroMaximo;
}