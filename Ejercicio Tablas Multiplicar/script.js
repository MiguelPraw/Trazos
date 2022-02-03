'use strict'

let nodoContenedor = document.querySelector("#contenedor");
let nodoEntrada = document.querySelector("#entrada");

function pintarTabla() {

    let cajaTabla = "<div class='caja'>";

    for (let i = 1; i <= nodoEntrada.value; i++) {
        cajaTabla += "<h2>Tabla del " + i + "</h2>";
        cajaTabla += calculaTabla(i);
        if (i < nodoEntrada.value) {
            cajaTabla += "</div><div class ='caja'>";
        } else {
            cajaTabla += "</div>";
        }
    }

    nodoContenedor.innerHTML = cajaTabla;
}

function calculaTabla (numero) {
    let cadenaTabla = "";
    for (let i = 0; i < 10; i++) {
        cadenaTabla += numero + " x " + i + " = " + numero*i + " <br> ";
    }
    return cadenaTabla;
}
