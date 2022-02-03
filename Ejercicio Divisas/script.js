'use strict'

const EURO_A_DOLAR = 1.13;
const EURO_A_LIBRA = 0.84;
const EURO_A_YEN = 130.96;

let nodoInput = document.querySelector("#euros");

function convertirMoneda(){

    let dolares = nodoInput.value * EURO_A_DOLAR;
    let libras = nodoInput.value * EURO_A_LIBRA;
    let yenes = nodoInput.value * EURO_A_YEN;

    let nodoResultado = document.querySelector("#resultado");
    nodoResultado.innerHTML ="<p>" + dolares + " $</p>"
                            + "<p>" + libras + " £</p>"
                            + "<p>" + yenes + " ¥</p>";
}