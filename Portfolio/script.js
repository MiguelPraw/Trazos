'use strict'

let fondos = [ 'https://wallpaperaccess.com/full/5651982.jpg' , 'https://wallpaperaccess.com/full/5651990.jpg' ];

let nodosSpan = document.querySelectorAll('.portada__span');
let n = 0;

let intervalo = setInterval( () => {
    nodosSpan[n].classList.remove('visible');
    n++;
    if (n >= nodosSpan.length) {
        n = 0;
    }
    nodosSpan[n].classList.add('visible');

}, 3000);

// let texto = "Desarrollador web";
// let intervaloSpecs = setInterval( function (){

//     if (n < texto.length) {
//         nodoH2.innerHTML += texto[n];
//         n++;
//     } else {
//         clearInterval(intervaloSpecs);
//     }

// }, 250);


document.querySelector('.main__portada').addEventListener( 'mousemove' , function (evento) {
    console.clear();
    console.log( evento );
});


/***** JS para el SCROLL *****/

let distancia = 0;

document.querySelector('body').addEventListener ('wheel', ( evento ) => {
    if (evento.deltaY > 0) {
        if (distancia <= 200) {
            distancia += 100;
        }
    } else {
        if (distancia >= 100) {
            distancia -= 100;
        }
    }
    document.querySelector('main').style.transform = `translateY(-${ distancia }%)`;
});

/* JS para los PROYECTOS */

let nodoH2React = document.querySelector('.proyectos__h2.react');
let nodoH2Angular = document.querySelector('.proyectos__h2.angular');
let nodoH2Javascript = document.querySelector('.proyectos__h2.javascript');

let nodosSpecs = document.querySelectorAll('.proyectos__specs');
let nodosIconos = document.querySelectorAll('.proyectos__icono');

let nodoGridAngular = document.querySelector('.proyectos__grid.angular');
let nodoGridReact = document.querySelector('.proyectos__grid.react');
let nodoGridJavascript = document.querySelector('.proyectos__grid.javascript');

document.querySelectorAll('.proyectos__h2').forEach( nodoProyecto => {
    
    nodoProyecto.addEventListener( 'mouseover' , function () {
        this.classList.add('activo');
        if (this.classList.contains('angular')) {
            nodoH2React.classList.remove('activo');
            nodoH2Javascript.classList.remove('activo');

            nodosSpecs.forEach( nodo => nodo.classList.remove('activo'));
            nodosIconos.forEach( nodo => nodo.classList.contains('angular') ? nodo.classList.add('activo') : nodo.classList.remove('activo') );
            this.nextElementSibling.classList.add('activo');

            nodoGridAngular.classList.add('activo');
            nodoGridReact.classList.remove('activo');
            nodoGridJavascript.classList.remove('activo');

        } else if (this.classList.contains('react')) {
            nodoH2Angular.classList.remove('activo');
            nodoH2Javascript.classList.remove('activo');

            nodosSpecs.forEach( nodo => nodo.classList.remove('activo'));
            nodosIconos.forEach( nodo => nodo.classList.contains('react') ? nodo.classList.add('activo') : nodo.classList.remove('activo') );
            this.nextElementSibling.classList.add('activo');

            nodoGridReact.classList.add('activo');
            nodoGridAngular.classList.remove('activo');
            nodoGridJavascript.classList.remove('activo');

        } else if (this.classList.contains('javascript')) {
            nodoH2Angular.classList.remove('activo');
            nodoH2React.classList.remove('activo');

            nodosSpecs.forEach( nodo => nodo.classList.remove('activo'));
            nodosIconos.forEach( nodo => nodo.classList.contains('javascript') ? nodo.classList.add('activo') : nodo.classList.remove('activo') );
            this.nextElementSibling.classList.add('activo');

            nodoGridJavascript.classList.add('activo');
            nodoGridAngular.classList.remove('activo');
            nodoGridReact.classList.remove('activo');
        }
    });
})

document.querySelector('.portada__boton.proyectos').addEventListener( 'click' , () => {
    distancia = 100;
    document.querySelector('main').style.transform = `translateY(-${ distancia }%)`;
});

document.querySelector('.portada__boton.about').addEventListener( 'click' , () => {
    distancia = 200;
    document.querySelector('main').style.transform = `translateY(-${ distancia }%)`;
});

document.querySelector('.portada__boton.contacto').addEventListener( 'click' , () => {
    distancia = 300;
    document.querySelector('main').style.transform = `translateY(-${ distancia }%)`;
});
// function añadeClaseHeader() {
//     let nodoLi = document.querySelectorAll('ul li');
//     nodoLi.forEach ( li => {
//         li.classList.remove('activo');  
        
//     });
//     nodoLi[distancia/100].classList.add('activo');
// }
