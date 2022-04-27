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

document.querySelector('body').addEventListener ('wheel', (evento) => {
    // console.log(evento);
    // console.log(nodoMainActivo);
    if (evento.deltaY > 0) {
        if (distancia <= 200) {
            distancia += 100;
        }
    } else {
        if (distancia >= 100) {
            distancia -= 100;
        }
    }
    // añadeClaseHeader();
    actualizaMain();
    document.querySelector('main').style.transform = `translateY(-${distancia}%)`;
});


function actualizaMain() {
    let nodoMain = document.querySelectorAll('main>div');
    nodoMainActivo = nodoMain[distancia/100];
    // console.log(nodoMainActivo);
}

let nodoH2React = document.querySelector('.proyectos__h2.react');
let nodoH2Angular = document.querySelector('.proyectos__h2.angular');
let nodoH2Javascript = document.querySelector('.proyectos__h2.javascript');

let nodoGridAngular = document.querySelector('.proyectos__grid.angular');
let nodoGridReact = document.querySelector('.proyectos__grid.react');
let nodoGridJavascript = document.querySelector('.proyectos__grid.javascript');

document.querySelectorAll('.proyectos__h2').forEach( nodoProyecto => {
    
    nodoProyecto.addEventListener( 'mouseover' , function () {
        this.classList.add('activo');
        if (this.classList.contains('angular')) {
            nodoH2React.classList.remove('activo');
            nodoH2Javascript.classList.remove('activo');

            this.nextElementSibling.classList.add('activo');

            nodoGridAngular.classList.add('activo');
            nodoGridReact.classList.remove('activo');
            nodoGridJavascript.classList.remove('activo');

        } else if (this.classList.contains('react')) {
            nodoH2Angular.classList.remove('activo');
            nodoH2Javascript.classList.remove('activo');

            nodoGridReact.classList.add('activo');
            nodoGridAngular.classList.remove('activo');
            nodoGridJavascript.classList.remove('activo');

        } else if (this.classList.contains('javascript')) {
            nodoH2Angular.classList.remove('activo');
            nodoH2React.classList.remove('activo');

            nodoGridJavascript.classList.add('activo');
            nodoGridAngular.classList.remove('activo');
            nodoGridReact.classList.remove('activo');
        }
    });

})
// function añadeClaseHeader() {
//     let nodoLi = document.querySelectorAll('ul li');
//     nodoLi.forEach ( li => {
//         li.classList.remove('activo');  
        
//     });
//     nodoLi[distancia/100].classList.add('activo');
// }

function ocultaProyectos () {
    document.querySelector('.proyectos__grid.javascript').classList.remove('activo');
    document.querySelector('.proyectos__grid.javascript').classList.remove('activo');

}

