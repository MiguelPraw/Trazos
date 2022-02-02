'use strict'

let nodoEntrada = document.querySelector("#entrada");
let nodoFibonacci = document.querySelector("#fibonacci");

let secuenciaFibonacci;

function pintaFibonacci(){
    secuenciaFibonacci = [0 , 1];
    calculaFibonacci(nodoEntrada.value);
    for (let i = 0; i < secuenciaFibonacci.length; i++) {
        if (i === 0) {
            nodoFibonacci.innerHTML = secuenciaFibonacci[i];
        } else {
            nodoFibonacci.innerHTML = nodoFibonacci.innerHTML + ", " + secuenciaFibonacci[i];
        }
    }
}

function calculaFibonacci(numero){
    for (let i = 2; i < numero; i++) {
        let siguiente = secuenciaFibonacci[i-2] + secuenciaFibonacci[i-1];
        secuenciaFibonacci.push(siguiente);
    }
}

