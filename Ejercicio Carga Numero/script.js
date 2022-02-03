'use strict'

let nodoNumero1 = document.querySelector('#numero1');
let nodoNumero2 = document.querySelector('#numero2');
let nodoNumero3 = document.querySelector('#numero3');
let nodoNumero4 = document.querySelector('#numero4');

let intervalo1;
let intervalo2;
let intervalo3;
let intervalo4;

let numero1 = 0;
let numero2 = 0;
let numero3 = 0;
let numero4 = 0;

intervalo1 = window.setInterval( function () {
    nodoNumero1.innerHTML = numero1 + "%";
    numero1++;
    if (numero1 > 79) {
        window.clearInterval(intervalo1);
    }
}, 21);

intervalo2 = window.setInterval( function () {
    nodoNumero2.innerHTML = numero2 + "%";
    numero2++;
    if (numero2 > 49) {
        window.clearInterval(intervalo2);
    }
}, 51);

intervalo3 = window.setInterval( function () {
    nodoNumero3.innerHTML = numero3 + "%";
    numero3++;
    if (numero3 > 70) {
        window.clearInterval(intervalo3);
    }
}, 30);

intervalo4 = window.setInterval( function () {
    nodoNumero4.innerHTML = numero4 + "%";
    numero4++;
    if (numero4 > 50) {
        window.clearInterval(intervalo4);
    }
}, 50);


