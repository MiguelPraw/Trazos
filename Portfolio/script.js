'use strict'

let nodoPortada = document.querySelector('.portada');
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

} , 100);


// nodoJuego.addEventListener ('mousemove', (evento) => {

//     let ejeX = (evento.pageX - window.innerWidth / 2) / 25;
//     let ejeY = (window.innerHeight / 2 - evento.pageY) / 25;

//     console.log("X", ejeX);
//     console.log ("Y", ejeY);

//     nodoJuego.style.transform = `rotateY(${ejeX}deg) rotateX(${ejeY}deg)`;
// });

// nodoJuego.addEventListener ('mouseleave', (evento) => {
//     nodoJuego.style.transition = 'transform 0.5s ease ';
//     nodoJuego.style.transform = 'rotateY(0 deg) rotateX(0 deg)';
// });