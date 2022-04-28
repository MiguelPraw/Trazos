<style>
    .titulo {
        font-size: 20px;
    }
    h1 {
        text-align: center;
        font-weight: bold;
        color: orange;
    }
    h2 {
        font-weight: bold;
        text-align: center;
        margin: 20px;
        color: orange;
    }
    h3 {
        color: tomato;
        text-align: center;
        margin: 20px;
    }
    h4 {
        color: tomato;
        text-align: center;
        margin: 20px;
    }
    i {
        font-weight: bold;
    }
</style>

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

1. public       : Carpeta donde se guarda el favicon, el css, html, las img, svgs, etc.
2. src          : Carpeta donde se guarda la aplicacion y todo el funcionamiento interno de desarrollo.
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

Solo puede devolver un único contenedor HTML. Se puede utilizar `<Fragment>` o `<> </>` para devolver varios.
En React, que utiliza JSX, se tiene que utilizar siempre `className` en lugar de `class`.

### Metodología SuitCSS

```html
<header class="Header">
    <h1 class="Header-h1"></h1>
    <nav class="Header-nav"></nav>
    <nav class="Header-nav Header-nav__rrss"></nav>
</header>
```

### Operador Ternario

El operador ternario se usa como el `*ngIf` de Angular. 

```jsx
<h3>{ meQuiere ? <Verdadero/> : <Falso/> }</h3>
```

### Map

Se utiliza con los arrays. Hay que añadir un `key` al elemento que se itera.

```jsx
<ul>
    { 
        semana.map( ( cadaDia , i ) => {
            return <li key={i}>{cadaDia} {i}</li>;
        }) 
    }
</ul>

<div>
    {
        clase.map( ( alumno, i ) => 
            <section key={alumno.id}>
                <h2>{ alumno.nombre }</h2>
                <h3>{ alumno.apellido }</h3>
                {
                    alumno.edad >= 18 
                    ? <p>Es mayor de edad</p>
                    : <p>Es menor de edad</p>
                }
            </section>
        )
    }
</div>
```

### Props

```jsx
const Titulo = ({ texto }) => {
    return (
        <h2>{ texto }</h2>
    )
}

<Titulo texto={ 'Primer turno' }/>
```

## Styled-Components

Nos permiten dar estilos a los componentes de React. 

1. Se pueden aplicar a cualquier componente que acepte `className`.
2. Se pueden combinar con archivos CSS/SCSS
3. Usarlos cuando tengamos componentes pequeños o en componentes cuyo estilo cambia con un `State`.

```bash
npm i styled-components -S

npm i --save-dev @types/styled-components    -> Si vamos a usar TypeScript
```

```js
import styled from 'styled-components'

export const NombreComponente = styled.etiquetaHTML`
    propiedadCSS: valor;
    propiedadCSS: valor;
`

const Etiqueta = styled.div`
  width             : ${ ({ width })            => width            || '100%'     };
  height            : ${ ({ height })           => height           || 'auto'     };
  background-color  : ${ ({ backgroundColor })  => backgroundColor  || 'initial'  };
  margin            : ${ ({ margin })           => margin           || 'auto'     };
  padding           : ${ ({ padding })          => padding          || '0'        };
  border            : ${ ({ border })           => border           || 'initial'  };
`

<Etiqueta width="90%" margin="auto"></Etiqueta>
```

### Theme Provider

Nos permite crear propiedades para dar estilo mediante Props a cualquier Styled Component que creemos. 
Su función es la misma que la de las Custom Properties.

```js
import ThemeProvider from 'styled-components';

const theme = {
  verde : 'green',
  rojo  : 'red',
  negro : 'black',
  blanco: 'white',
}

const App = () => {
    return (
        <ThemeProvider theme={ theme }>
            <div className="App"></div>
        </ThemeProvider>
    )
}

```

### Global Style

Si quiero utilizar un estilo global, es obligatorio usar el Theme Provider. 
Es un CSS que se va a aplicar a todos los Componentes, como el Reset CSS.

```js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding : 0;
    border: 0;
}
`;

export default GlobalStyle;

/* EN EL APP */

import GlobalStyle from './assets/global.styled';

const App = () => {
    return (
        <ThemeProvider theme={ theme }>
            <GlobalStyle />
            <div className="App"></div>
        </ThemeProvider>
    )
}
```

## Hooks

En React cada componente se renderiza a si mismo y se autorenderiza cada vez que hay un pequeño cambio, a través de los hooks.
Son ciclos de vida de un componente. El orden de ejecución es:

1. `UseContext`         : Datos globales de la aplicación
2. `UseLayoutEffect`    : Hacer cálculos y aplicarlos a CSS antes del render
3. `UseRef`             : Datos que cambian pero NO renderizan al componente
* Render del componente (TODOS los componentes internos se renderizan de nuevo)
4. `useEffect`           
    1. `useEffect SIN dependencias []` : Se ejecuta una sola vez hasta que se destruya
    2. `useEffect CON dependencias [estado]`   : Se ejecuta cada vez que un state cambia
5. `useState`           : Datos que cambian pero SI renderizan al componente
    1. `useReducer`     : Una alternativa al useState, si el State es muy grande
    2. `Redux`          : Se utiliza como alternativa al Reducer en States muy complejos
6. `useEffect - cleanUp`: useEffect con return

* Extra:

1. `useMemo` : Cálculos muy grandes
2. `useCallback`: Guardar funciones en memoria

### UseState y UseEffect

```js
const [ foto , setFoto ] = useState (0);
const [ nombre , setNombre ] = useState('Emma');
```

`foto` es el Getter de la variable, `setContador` el Setter y `useState` implementa el estado inicial.

El `useState` se usa indicar que una variable genere un estado, es decir, que cada vez que varíe de valor, el componente se renderiza.

`useEffect` es un hook que se lanza cada vez que el `State` cambia; cada vez que se inicia, renderiza o destruye un componente.

```jsx
    
    useLayoutEffect( () => {
        console.log('useLayoutEffect');
    }); /* Se ejecuta antes de renderizar el componente. Ejemplo: calcular e indicar el ancho de un slider antes de pintarlo */

    useEffect( () => {
        console.log('Ejecutando useEffect, SIN dependencia o con dependencia vacía ');
    }, []); /* Su funcion es la misma que el ngOnInit de Angular */

    useEffect( () => {
        console.log('Ejecutando useEffect, se ejecuta ante cualquier cambio en el State');
    });

    useEffect( () => {
        console.log('Ejecutando useEffect con dependencia de foto')
    }, [ foto ]);

    useEffect( () => {
        /* Función cleanup */
        return function () {
            console.log('Destruyendo componente');
        }
    });

```

### HOC (Higher Order Components)

Es un patrón o técnica para el reuso de la lógica de React. Se le llama así a aquellos componentes que tienen hooks, es decir, un componente funcional.

## Custom Hook

Podemos crear nuestros propios Hooks para optimizar y reutilizar lógica de nuestra aplicación.

```js
const useFetch = ( endpoint ) => {

    const baseUrl = 'https://jsonplaceholder.typicode.com'

    const [ datos , setDatos ] = useState({
        status  : false,
        datos   : []
    })

    useEffect( () => {
        fetch( baseUrl + endpoint )
        .then( res => res.json())
        .then( data => {
            setDatos({
                status  : true,
                datos   : data
            })
        })
        .catch( err => {
            setDatos({
                status  : true,
                ...datos,
                error   : err
            })
        })
    }, []);

    return datos;
}

/* En el App.jsx */

import useFetch from './../../Hooks/useFetch';

const datos = useFetch('/posts');

```

## GlobalContext

1. Crear el archivo `global.context.jsx` y dentro de él:

```jsx
import { createContext } from 'react'

/* Creamos la constante donde guardar los datos */
export const datos = { nombre : "Pepe" }

/* Creamos el contexto */
export const GlobalContext = createContext( datos );
```

2. En el `App.jsx`:

```jsx
/* Importamos los datos que acabamos de crear y el GlobalContext */
import { datos , GlobalContext } from './assets/global.context'

function App() {
  
  /* Añadimos el GlobalContext en la raíz de la App */
  return (
    <GlobalContext.Provider value={ datos }>
        <div className="App">
          <Componente></Componente>
        </div>
    </GlobalContext.Provider>
  )

}
```

3. En el `Componente` de turno:

```jsx
import { useContext } from "react";
import { GlobalContext } from "../assets/global.context";

const Componente = ({}) => {

    const datos = useContext( GlobalContext );

    return (
        <div className="Componente">
            <h1>Componente</h1>
        </div>
    )
}

export default Componente;
```

