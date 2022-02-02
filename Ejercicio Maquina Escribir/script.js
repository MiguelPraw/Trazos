'use strict'

let nodoTexto = document.querySelector('#texto');

let intervalo;

let array = ["JavaScript", "Angular", "JQuery"];

let cont = 0;
escribeFrase(divideTexto(array[cont]));

function escribeFrase (arrayCaracteres) {
    let i = 0;
    intervalo = setInterval ( function () {
        if (i < arrayCaracteres.length) {
            nodoTexto.innerHTML += "" + arrayCaracteres[i];
            i++;
        } else {
            clearInterval(intervalo);
            borraFrase(arrayCaracteres);
        }
    }, 300);
}

function borraFrase (arrayCaracteres) {
    let i = arrayCaracteres.length;
    intervalo = setInterval ( function () {
        if (i >= 0) {
            arrayCaracteres.pop();
            let frase = "".concat(...arrayCaracteres);
            nodoTexto.innerHTML = frase;
            i--;
        } else {
            clearInterval(intervalo);
            cont++;
            if (cont < array.length) {
            } else {
                cont = 0;
            }
            escribeFrase(divideTexto(array[cont]));
        }
    }, 250);
}

function divideTexto (texto) {
    let array = texto.split("");
    return array;
}