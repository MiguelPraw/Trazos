'use strict'

let actual = 0;

let imagenes = ['https://picsum.photos/id/237/200', 
'https://picsum.photos/id/222/200', 
'https://picsum.photos/id/234/200',
'https://picsum.photos/id/235/200',
'https://picsum.photos/id/236/200',
'https://picsum.photos/id/233/200'];

$('.slider').ready(function (){
    $('.imagen>img').attr('src', imagenes[actual]);
});

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
    actual++;
    if (actual >= imagenes.length) {
        actual = 0;
    }
    $('.imagen>img').attr('src', imagenes[actual]);
}

function cambiaIzquierda () {
    actual--;
    if (actual < 0) {
        actual = imagenes.length - 1;
    }
    $('.imagen>img').attr('src', imagenes[actual]);
}

let intervalo = setInterval( () => {
    
    cambiaDerecha();

}, 3000);