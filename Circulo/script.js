'use strict'

const PI = 3.141592;

let nodoEntrada = document.querySelector("#entrada");
let nodoDiametro = document.querySelector("#diametro");
let nodoArea = document.querySelector("#area");
let nodoPerimetro = document.querySelector("#perimetro");

function calculaDiametro (radio) {
    return 2*radio;
}

function calculaArea (radio) {
    return PI*radio*radio;
}

function calculaPerimetro (radio) {
    return 2*PI*radio;
}

function calculaCirculo() {
    nodoDiametro.innerHTML = "" + calculaDiametro(nodoEntrada.value);
    nodoArea.innerHTML = "" + calculaArea(nodoEntrada.value);
    nodoPerimetro.innerHTML = "" + calculaPerimetro(nodoEntrada.value);
}