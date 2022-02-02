'use strict'

let nodoBanner1 = document.querySelector('.banner');
let nodoBanner2 = document.querySelector('.banner2');
let nodoEfecto = document.querySelector('.efecto');

document.querySelector('body').addEventListener('mousemove', function (evento) {
    
    let x = -(evento.clientX/20);
    let y = -(evento.clientY/20);

    nodoBanner1.style.backgroundPosition = `${x}px ${y}px`;

});

nodoBanner2.addEventListener('mousemove', function (evento) {

    let x = evento.offsetX;
    let y = evento.offsetY;
    
    nodoEfecto.style.width = x + "px";
    nodoEfecto.style.height = y + "px";

});

