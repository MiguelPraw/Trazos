'use strict'

let nodoAñadir = document.querySelector('#añadir');
let nodoSortear = document.querySelector('#sortear');
let nodoSortearComplejo = document.querySelector('#sortearComplejo');
let nodoPersonas = document.querySelector('#personas');

nodoAñadir.addEventListener('click', () => {
    let nodoInput = document.querySelector('#texto');
    let nombre = nodoInput.value;
    if (nombre === "") {
        alert('Introduce un nombre');
    } else {
        let nodoDiv = document.createElement('div');
        nodoDiv.classList.add('persona');
        let nodoSpan = document.createElement('span');
        nodoSpan.innerHTML = nombre;
        nodoDiv.append(nodoSpan);
        nodoPersonas.append(nodoDiv);
    }
});

nodoSortear.addEventListener('click', () => {
    sorteo();
});

nodoSortearComplejo.addEventListener('click', () => {
    let iteraciones = 8;
    let actual = 0;
    let intervalo = setInterval( () => {
        if (actual <= iteraciones) {
            sorteo();
            actual++;
        } else {
            clearInterval(intervalo);
        }
    }, 200);

});

function sorteo () {
    let nodoPersonas = document.querySelectorAll('.persona');
    reiniciaClases(nodoPersonas);
    let aleatorio = Math.random() * nodoPersonas.length;
    aleatorio = Math.trunc(aleatorio);
    nodoPersonas[aleatorio].classList.add('ganador');
}

function reiniciaClases(nodoPersonas) {
    for (let i = 0; i < nodoPersonas.length; i++) {
        nodoPersonas[i].classList.remove('ganador');
    }
}