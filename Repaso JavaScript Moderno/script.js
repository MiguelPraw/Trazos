'use strict'

// Funciones de flecha

function miFuncionCreaContext () {

}

const miFuncionArrow = (nombre) => {
    return "Hola " + nombre;
}

const nombre = miFuncionArrow ('Paco');

const miFuncionArrowReturn = (nombre) => "Hola " + nombre;

// If ternario

let condicion = true;
let texto = "Hola ";
if (condicion) {
    texto += "Señor";
} else {
    texto += "Señora";
}

let textoTernario = "Hola " + (condicion ? "Señor" : "Señora");

// Map y Filter // Array -> Array

let alumnos = [
    {nombre: "AAA", apellido: "BBB", edad: 15},
    {nombre: "EEE", apellido: "CCC", edad: 20},
    {nombre: "III", apellido: "DDD", edad: 30}
];

let alumnos_filtrados = alumnos.filter( cadaElemento => {
    if (cadaElemento.edad > 18) {
        return true;
    } else {
        return false;
    }
});

let alumnos_transformados = alumnos.map( cadaElemento => {
    let div = document.createElement('div');
    div.innerHTML = cadaElemento.nombre;
    return div;
});

// Destructuring

let pelicula = {
    nombre: "Toy Story",
    director: "Pixar",
    reparto: [
        "Woody",
        "Buzz",
        "Mr Potato"
    ],
    fecha: 1993,
    sinopsis: "Juguetes haciendo cosas"
};

// Crea una variable por cada atributo de la pelicula que coincida
let {nombre, director} = pelicula;

// Operador Spreed
