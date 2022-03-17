'use strict'

const trazos = [
    {   
        nombre : 'alumnos',
        datos : [
            { nombre : 'Alba', apellido : 'García' },
            { nombre : 'Pablo', apellido : 'Wako' },
            { nombre : 'Sergio', apellido : 'Muñoz' },
            { nombre : 'Álvaro', apellido : 'Gómez' },
            { nombre : 'Miguel', apellido : 'Pérez' }
        ] 
    },
    { 
        nombre : 'clase', 
        datos : [
            { nombre : 'HTML y CSS', dificultad : 0 },
            { nombre : 'Javascript', dificultad : 1 },
            { nombre : 'Frameworks', dificultad : 2 }
        ] 
    },
    { 
        nombre : 'profes', 
        datos : [
            { nombre : 'Luis', apellido : 'Jimenez'},
            { nombre : 'Manu', apellido : 'Jimenez'},
            { nombre : 'Dani', apellido : 'Montejo'},
            { nombre : 'Edu', apellido : 'Fierro' }
        ] 
    }
];

const ejemplo1 = trazos.map( objeto => objeto );
const ejemplo2 = trazos.find( objeto => objeto.nombre === 'clase' );
const ejemplo3 = trazos.findIndex( objeto => objeto.nombre === 'clase' );

// console.log( ejemplo1 );
// console.log( ejemplo2 );
// console.log( ejemplo3 );

/* Condicional ternario */

let mayor = (20 > 18) ? true : false;

// console.log(mayor);

/* Deconstrucción de un Array */

let alumno = ['Timmy', 'Anderson', 32];

// let nombre      = alumno[0];
// let apellido    = alumno[1];
// let edad        = alumno[2];

// let [ nombre , apellido , edad ] = alumno;
// console.log(nombre);

/* Deconstrucción de un Objeto */

let profe = { nombre : 'Timmy', apellido : 'Anderson', edad : 32 };

let { nombre , apellido , edad } = profe;

// console.log(apellido);

trazos.forEach ( info => {
    let { nombre , datos } = info;
    console.log( nombre );
    datos.forEach( dato => {
        let { nombre, apellido } = dato;
        console.log( { nombre , apellido } );
    });
});

// document.body.addEventListener ( 'mousemove', e => {
//     let { clientX , clientY} = e;
//     console.log( { clientX , clientY } );
// });

const elemento1 = document.querySelector('.elemento1');
const elemento2 = document.querySelector('.elemento2');
const elemento3 = document.querySelector('.elemento3');
const elemento4 = document.querySelector('.elemento4');
const elemento5 = document.querySelector('.elemento5');

const elementos = document.querySelectorAll('.elemento');

elementos.forEach( (elemento, i) => {
    elementos[i].addEventListener( 'click', e => {
        let { clientX , clientY } = e;
        elementos[i].innerHTML = `${clientX}, ${clientY}`;
    });
})

elemento1.addEventListener( 'mousemove', e => {
    let { clientX , clientY } = e;
    console.log( { clientX , clientY } );
});

elemento2.addEventListener( 'mousemove', e => {
    let { clientX , clientY } = e;
    console.log( { clientX , clientY } );
});

elemento3.addEventListener( 'mousemove', e => {
    let { clientX , clientY } = e;
    console.log( { clientX , clientY } );
});

elemento4.addEventListener( 'mousemove', e => {
    let { clientX , clientY } = e;
    console.log( { clientX , clientY } );
});

elemento5.addEventListener( 'mousemove', e => {
    let { clientX , clientY } = e;
    console.log( { clientX , clientY } );
});

