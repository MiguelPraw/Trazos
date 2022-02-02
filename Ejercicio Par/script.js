'use strict'

let nodoEntrada = document.querySelector("#entrada");
let nodoPar = document.querySelector("#par");
let nodoMultiplo3 = document.querySelector("#multiplo3");
let nodoMultiplo7 = document.querySelector("#multiplo7");


function calculaNumero(){
    pintaPar();
    pintaMultiplo3();
    pintaMultiplo7();
}

function calculaPar(numero){
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function calculaMultiplo3 (numero) {
    if (numero % 3 === 0) {
        return true;
    } else {
        return false;
    }
}

function calculaMultiplo7 (numero) {
    if (numero % 7 === 0) {
        return true;
    } else {
        return false;
    }
}

function pintaPar () {
    if (calculaPar(nodoEntrada.value)){
        nodoPar.innerHTML = "El número es par";
    } else {
        nodoPar.innerHTML = "El numero no es par";
    }
}

function pintaMultiplo3 () {
    if (calculaMultiplo3(nodoEntrada.value)){
        nodoMultiplo3.innerHTML = "El número es multiplo de 3";
    } else {
        nodoMultiplo3.innerHTML = "El numero no es multiplo de 3";
    }
}

function pintaMultiplo7 () {
    if (calculaMultiplo7(nodoEntrada.value)){
        nodoMultiplo7.innerHTML = "El número es multiplo de 7";
    } else {
        nodoMultiplo7.innerHTML = "El numero no es multiplo de 7";
    }
}