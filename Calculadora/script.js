'use strict'

let nodoResultado = document.querySelector("#resultado");
let nodoReset = document.querySelector("#reset");

let estadoActual = "";
let estadoAnterior = "";
let operando1 = 0;
let operando2 = 0;

function numero (numero) {
    
    if (estadoActual === "") {
        operando1 = actualizoOperando(operando1, numero);
        nodoResultado.innerHTML = operando1;
    } else {
        operando2 = actualizoOperando(operando2, numero);
        nodoResultado.innerHTML = operando2;
    }

}

function actualizoOperando(operando, numero) {
    if(numero === 0) {
        operando = operando*10;
    } else {
        operando = operando*10 + Number(numero);
    }
    return operando;
}

function reset () {
    nodoResultado.innerHTML = 0;
    estadoActual = "";
    operando1 = 0;  
    operando2 = 0;
}

function suma() {
    if (estadoActual == "") {
        estadoActual = "+";
    }
    estadoAnterior = estadoActual;
    estadoActual = "+";
    gestionaEstado();
}

function resta() {
    if (estadoActual == "") {
        estadoActual = "-";
    }
    estadoAnterior = estadoActual;
    estadoActual = "-";
    gestionaEstado();
}

function multiplica() {
    if (estadoActual == "") {
        estadoActual = "x";
    }
    estadoAnterior = estadoActual;
    estadoActual = "x";
    gestionaEstado();
}

function divide() {
    if (estadoActual == "") {
        estadoActual = "/";
    }
    estadoAnterior = estadoActual;
    estadoActual = "/";
    gestionaEstado();
}

function igual() {
    estadoAnterior = estadoActual;
    estadoActual = "=";
    gestionaEstado();
}

function gestionaEstado () {
    let resultado = 0;
    switch (estadoAnterior) {
        case "+":
            ejecutaSuma(resultado);
            break;
        case "-":
            ejecutaResta(resultado);
            break;
        case "/":
            ejecutaDivision(resultado);
            break;
        case "x":
            ejecutaMultiplicacion(resultado);
            break;
        case "=":
            ejecutaIgual(resultado);
            break;
        default:
            nodoResultado.innerHTML = "Problema";
            break;
    }
    resultado = 0;
}

function ejecutaSuma(resultado) {
    resultado = operando1 + operando2;
    nodoResultado.innerHTML = resultado;
    operando1 = resultado;
    operando2 = 0;
}

function ejecutaResta(resultado) {
    resultado = operando1 - operando2;
    nodoResultado.innerHTML = resultado;
    operando1 = resultado;
    operando2 = 0;
}

function ejecutaMultiplicacion (resultado) {
    if (estadoAnterior === "" || operando2 === 0) {
        operando2 = 1;
    }
    resultado = operando1 * operando2;
    nodoResultado.innerHTML = resultado;
    operando1 = resultado;
    operando2 = 0;
}

function ejecutaIgual (resultado) {
    if (estadoAnterior === "+") {
        ejecutaSuma(resultado);
    } else if (estadoAnterior === "-") {
        ejecutaResta(resultado);
    } else if (estadoAnterior === "x") {
        ejecutaMultiplicacion (resultado);
    } else if (estadoAnterior === "/") {
        ejecutaDivision(resultado);
    }
    estadoActual = "";
}

function ejecutaDivision (resultado) {
    if (estadoAnterior === "" || operando2 === 0) {
        operando2 = 1;
    }
    resultado = operando1 / operando2;
    nodoResultado.innerHTML = resultado;
    operando1 = resultado;
    operando2 = 0;
}

