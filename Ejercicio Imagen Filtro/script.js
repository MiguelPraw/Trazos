'use strict'

let nodoBanner1 = document.querySelector('.banner');
let nodoBanner2 = document.querySelector('.banner2');
let nodoEfecto = document.querySelector('.efecto');

document.querySelector('body').addEventListener('mousemove', function (evento) {
    
    let x = -(evento.clientX/20);
    let y = -(evento.clientY/20);

    nodoBanner1.style.backgroundPosition = `${x}px ${y}px`;

});

document.querySelector('body').addEventListener('mousemove', function (evento) {

    let x = evento.clientX;
    let y = evento.clientY;
    y = y - nodoBanner2.offsetTop;
    if (y < 0) {
        y = 0;
    }
    nodoEfecto.style.width = x + "px";
    nodoEfecto.style.height = y + "px";

});

