'use strict'


let actual = 0;

let imagenes = ['https://picsum.photos/id/237/200', 
'https://picsum.photos/id/222/200', 
'https://picsum.photos/id/234/200',
'https://picsum.photos/id/235/200',
'https://picsum.photos/id/236/200',
'https://picsum.photos/id/233/200'];

$('.flechaIzq').on({
    click: function () {
        cambiaIzquierda();
    }
});

$('.flechaDcha').on({
    click: function () {
        cambiaDerecha();
    }
});

function cambiaDerecha () {
    $('.slider__img>img')[actual].classList.add('oculto');
    actual++;
    if (actual >= $('.slider__img>img').length) {
        actual = 0;
    }
    $('.slider__img>img')[actual].classList.remove('oculto');
}

function cambiaIzquierda () {
    $('.slider__img>img')[actual].classList.add('oculto');
    actual--;
    if (actual < 0) {
        actual = $('.slider__img>img').length - 1;
    }
    $('.slider__img>img')[actual].classList.remove('oculto');
}

let intervalo = setInterval( () => {
    
    cambiaDerecha();

}, 3000);

