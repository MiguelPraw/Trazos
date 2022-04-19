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

ReactJS es la librería, React Native el framework. ReactJS sirve para hacer interfaces de usuario, React Native para aplicaciones.
Se conecta habitualmente con Redux (gestión de los estados) y Styled Components (CSS con JavaScript).
En React no se pueden usar métodos mutables (Aquellos que modifican el objeto original).

Hay dos maneras de utilizarse: mediante libreria y CDN o mediante el Cli de React.

# Características

## Creación de una aplicación

```bash
npx create-react-app nombreApp        
npm start

npm create vite@latest
npm i
npm run dev
```

## Estructura

1. public       : Carpeta donde se guarda el favicon, el css, html, etc.
2. src          : Carpeta donde se guarda la aplicacion.
3. package.json : Contiene el resumen de todas las dependencias de la aplicación.

## Base de la aplicación

El `index.js` es el HTML principal. `index.css` es el CSS global. `App.js` es el componente principal.

## Componentes

Un componente en React es una parte de la app creada con HTML y CSS. La estructura básica de un componente es:

```js
import 'archivo.scss';

const App = () => {}

export default App;
```

Solo puede devolver un único contenedor HTML. Se puede utilizar <Fragment> o `<> </>` para devolver varios.

### Styled-Components

```bash
npm i styled-components
```

### Metodología SuitCSS

```html
<header class="Header">
    <h1 class="Header-h1"></h1>
    <nav class="Header-nav"></nav>
    <nav class="Header-nav Header-nav__rrss"></nav>
</header>
```

### Props

En React, que utiliza JSX, se tiene que utilizar siempre "className" en lugar de "class".

Para crear variables dinámicas utilizamos:

```js

const [ contador, setContador ] = useState ( 0 );

```

'contador' es el GET de la variable, setContador el SETTER y useState implementa el estado inicial.


