# Repaso JS Previo

```js

// Funciones de flecha

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
// Mete a nombre -> pelicula.nombre // Mete a director -> pelicula.director
let {nombre, director} = pelicula;

console.log(nombre);
console.log(director);

// Operador Spread

let alumno = {
    nombre: "Luis"
}

let alumno2 = alumno; // Asigna un alias a la referencia

alumno2.nombre = "Pepe"; // Si cambio los atributos se cambian tambien en el primero

let alumno3 = {...alumno}; // El operador Spread desenvuelve el contenido y lo asigna a una variable

alumno3.nombre = "Jose";

let letras = ['A', 'E', 'I', 'O', 'U'];

let consonantes = ['B', 'C', 'D'];

let todas_letras = [...letras , ...consonantes];
todas_letras = [ ...todas_letras, 'E']; // PUSH

```


# React

En React no se pueden usar métodos mutables (Aquellos que modifican el objeto original)

React es una libreria, se va a poder utilizar en cualquier proyecto.
Hay dos maneras de utilizarse: mediante libreria y CDN o mediante el Cli de React

## Características

En React, que utiliza JSX, se tiene que utilizar siempre "className" en lugar de "class".
Solo puede devolver un único contenedor HTML. Se puede utilizar <Fragment> para devolver varios.