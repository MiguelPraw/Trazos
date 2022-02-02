'use strict'

const IVA = 21;

let nodoEntrada = document.querySelector("#entrada");
let nodoPrecioBase = document.querySelector("#precioBase");
let nodoImpuestos = document.querySelector("#impuestos");
let nodoGastosEnvio = document.querySelector("#gastosEnvio");
let nodoTotal = document.querySelector("#total");

function ejecutaTotal(){
    pintaPrecio();
    pintaImpuestos();
    pintaGastosEnvio();
    pintaTotal();
}

function calculaIVA(precio){
    return precio * IVA / 100;
}

function calculaGastosEnvio(precio){
    if (precio < 50) {
        return 10;
    } else {
        return 0;
    }
}

function calculaTotal(precio, impuestos, gastosEnvio){
    
    return Number(precio) + Number(impuestos) + Number(gastosEnvio);
}

function pintaPrecio () {
    nodoPrecioBase.innerHTML = "" + nodoEntrada.value;
}

function pintaImpuestos () {
    nodoImpuestos.innerHTML = "" + calculaIVA(nodoEntrada.value);
}

function pintaGastosEnvio () {
    nodoGastosEnvio.innerHTML = "" + calculaGastosEnvio(nodoEntrada.value);
}

function pintaTotal() {
    let impuestos = calculaIVA(nodoEntrada.value);
    let gastosEnvio = calculaGastosEnvio(nodoEntrada.value);
    nodoTotal.innerHTML = "" + calculaTotal(nodoEntrada.value, impuestos, gastosEnvio);
}