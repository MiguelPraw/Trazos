'use strict'

/*let nodoPortada = document.querySelector('.portada');
let nodoH1 = document.querySelector('.portada__h1');

let texto = "Hola, soy Miguel Pérez, desarrollador web.";

let n = 0;


let textoPrincipal = setInterval( function (){

    if (n < texto.length) {
        nodoH1.innerHTML += texto[n];
        n++;
    } else {
        clearInterval(textoPrincipal);
    }

}, 100);*/

let distancia = 0;
let nodoMainActivo;

document.querySelector('body').addEventListener ('wheel', function (evento) {
    console.log(evento);
    console.log(nodoMainActivo);
    if (evento.deltaY > 0) {
        if (distancia <= 200) {
            distancia += 100;
        }
    } else {
        if (distancia >= 100) {
            distancia -= 100;
        }
    }
    añadeClaseHeader ();
    actualizaMain ();
    document.querySelector('main').style.transform = `translateY(-${distancia}%)`;
});

function añadeClaseHeader () {
    let nodoLi = document.querySelectorAll('ul li');
    nodoLi.forEach ( li => {
        li.classList.remove('activo');
        
    });
    nodoLi[distancia/100].classList.add('activo');
}

function actualizaMain () {
    let nodoMain = document.querySelectorAll('main>div');
    nodoMainActivo = nodoMain[distancia/100];
    console.log(nodoMainActivo);
}


