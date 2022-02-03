'use strict'

function comenzarJuego() {
    let fechaInicial = new Date();
let nodoResultado = document.querySelector("#resultado");
nodoResultado.innerHTML = fechaInicial.getTime();

let nombre = window.prompt("Introduce tu nombre: ");

let respuesta1 = window.prompt(nombre + ", ¿qué río pasa por Madrid?");

if (respuesta1 == "Manzanares" || respuesta1 == "manzanares") {
    alert("Enhorabuena " + nombre + ", has acertado.");
    let respuesta2 = window.prompt(nombre + ", ¿cuál es la capital de Italia?");
    if (respuesta2 == "Roma" || respuesta2 == "roma") {
        alert("Enhorabuena " + nombre + ", has acertado.");
        let respuesta3 = window.prompt(nombre + ", ¿dónde esta la Alhambra?");
        if (respuesta3 == "Granada" || respuesta3 == "granada") {
            alert("Enhorabuena " + nombre + ", ¡todas las respuestas son correctas!")
        } else {
            alert("Solo dos son correctas " + nombre);
        }
    } else {
        alert("Fallaste " + nombre + ", vuelve a intentarlo");
    }
} else {
    alert("Tienes que estudiar más, " + nombre);
}

let fechaFinal = new Date();
let resultadoFecha = fechaFinal.getTime() - fechaInicial.getTime();
nodoResultado.innerHTML = nombre + ", has tardado " + resultadoFecha/1000 + " segundos.";
}