'use strict'

let nodoEntrada = document.querySelector('#entrada');
let nodoSalida = document.querySelector('#salida');
let nodoEntradaTextarea = document.querySelector('#entradaTextarea');

let nodoCaracteresInput = document.querySelector('#caracteresInput');
let nodoPalabrasInput = document.querySelector('#palabrasInput');
let nodoCaracteresTextarea = document.querySelector('#caracteresTextarea');
let nodoPalabrasTextarea = document.querySelector('#palabrasTextarea');

let nodoMayus = document.querySelector('#btnMayus');
let nodoMinus = document.querySelector('#btnMinus');

nodoEntrada.addEventListener ('keyup', () => {

    let texto = nodoEntrada.value;
    let pattern = /([\ \*\,]){1,}/gi;
    console.log(pattern);
    let textoSlug = texto.replace ( pattern , "-" );
    nodoSalida.value = textoSlug;

    let nCaracteres = texto.split("");
    let arrayPalabras = textoSlug.split("-");
    if (!textoSlug.endsWith('-')) {
        nodoPalabrasInput.innerHTML = arrayPalabras.length;
    }
    nodoCaracteresInput.innerHTML = nCaracteres.length;
});

nodoEntradaTextarea.addEventListener ('keyup', () => {

    let texto = nodoEntradaTextarea.value;

    if (texto === "") {
        nodoPalabrasTextarea.innerHTML = 0;
        nodoCaracteresTextarea.innerHTML = 0;
    }

    let nCaracteres = texto.split("");
    let nPalabras = texto.split(" ");
    if (!(nPalabras[nPalabras.length - 1] === "")) {
        nodoPalabrasTextarea.innerHTML = nPalabras.length;
    }
    nodoCaracteresTextarea.innerHTML = nCaracteres.length;

});

nodoMayus.addEventListener ('click', () => {
    let texto = nodoEntradaTextarea.value;
    nodoEntradaTextarea.value = texto.toUpperCase();
});

nodoMinus.addEventListener ('click', () => {
    let texto = nodoEntradaTextarea.value;
    nodoEntradaTextarea.value = texto.toLowerCase();
});
