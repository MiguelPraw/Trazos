'use strict'

let nodoEmpezar = document.querySelector('#empezar');
let nodoParar = document.querySelector('#parar');
let nodoGuardar = document.querySelector('#guardar');
let nodoReiniciar = document.querySelector('#reiniciar');
let nodoBorrar = document.querySelector('#borrar');

let nodoHoras = document.querySelector('#horas');
let nodoMinutos = document.querySelector('#minutos');
let nodoSegundos = document.querySelector('#segundos');
let nodoMilisegundos = document.querySelector('#milisegundos');

let nodoTiempos = document.querySelector('#tiempos');

let cronometro;
let contadorMilisegundos = 0;
let contadorSegundos = 0;
let contadorMinutos = 0;
let contadorHoras = 0;

nodoEmpezar.addEventListener ('click', function () {

    nodoEmpezar.disabled = true;
    nodoEmpezar.classList.add('inactivo');

    cronometro = window.setInterval(function () {
        if(contadorMilisegundos < 10) {
            nodoMilisegundos.innerHTML = "0" + contadorMilisegundos;
        } else {
            nodoMilisegundos.innerHTML = contadorMilisegundos;
        }
        contadorMilisegundos++;
        if (contadorMilisegundos > 99) {
            contadorMilisegundos = 0;
            contadorSegundos++;
            if (contadorSegundos < 10) {
                nodoSegundos.innerHTML = "0" + contadorSegundos + ":";
            } else {
                nodoSegundos.innerHTML = contadorSegundos + ":";
            }
        }
        if (contadorSegundos > 59) {
            contadorSegundos = 0;
            contadorMinutos++;
            if (contadorMinutos < 10) {
                nodoMinutos.innerHTML = "0" + contadorMinutos + ":";
            } else {
                nodoMinutos.innerHTML = contadorMinutos + ":";
            }
        }
        if (contadorMinutos > 59) {
            contadorMinutos = 0;
            contadorHoras++;
            if (contadorHoras < 10) {
                nodoHoras.innerHTML = "0" + contadorHoras + ":";
            } else {
                nodoHoras.innerHTML = contadorHoras + ":";
            }
        }
    }, 10);
});

nodoParar.addEventListener ('click', function () {
    window.clearInterval(cronometro);
    nodoEmpezar.disabled = false;
    nodoEmpezar.classList.remove('inactivo');
});

nodoGuardar.addEventListener ('click', function () {
    let nodoTiempo = document.createElement('div');
    nodoTiempo.classList.add('tiempo');
    let nodoSpan = document.createElement('span');
    let nodoCerrar = document.createElement('button');
    nodoCerrar.classList.add('cerrar');
    nodoCerrar.innerHTML = "X";
    nodoSpan.innerHTML = `${nodoHoras.innerHTML}${nodoMinutos.innerHTML}${nodoSegundos.innerHTML}${nodoMilisegundos.innerHTML}`;
    nodoTiempo.append(nodoSpan);
    nodoTiempo.append(nodoCerrar);
    nodoTiempos.append(nodoTiempo);
        
    nodoCerrar.addEventListener ('click', function () {
        nodoTiempos.removeChild(nodoTiempo);
    });
});

nodoBorrar.addEventListener ('click', function() {
    contadorMilisegundos = 0;
    contadorSegundos = 0;
    contadorMinutos = 0;
    contadorHoras = 0;
    nodoMilisegundos.innerHTML = "0" + contadorMilisegundos;
    nodoSegundos.innerHTML = "0" + contadorSegundos + ":";
    nodoMinutos.innerHTML = "0" + contadorMinutos + ":";
    nodoHoras.innerHTML = "0" + contadorHoras + ":";
    window.clearInterval(cronometro);
    nodoEmpezar.disabled = false;
    nodoEmpezar.classList.remove('inactivo');
});
