'use strict'

let nodoEntrada = document.querySelector("#entrada");
let nodoFactorial = document.querySelector("#factorial");

function pintaFactorial(){
    nodoFactorial.innerHTML = "El factorial es " + calculaFactorial(nodoEntrada.value);
}

function calculaFactorial(numero){
    let suma = numero;
    for(let i = numero-1; i > 0; i--) {
        suma = suma * i;
    }
    return suma;
}
