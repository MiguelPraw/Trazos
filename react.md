# React

- [React](#react)
- [Qué es ReactJS](#qué-es-reactjs)
- [Universo de React](#universo-de-react)
- [¿Qué es JSX?](#qué-es-jsx)
- [Crear una nueva App de React](#crear-una-nueva-app-de-react)
  - [Estructura de una App de React](#estructura-de-una-app-de-react)
  - [Class vs Funcional](#class-vs-funcional)
- [Sintáxis de React](#sintáxis-de-react)
  - [Sintáxis básica de un componente](#sintáxis-básica-de-un-componente)
    - [Return de un componente funcional](#return-de-un-componente-funcional)
    - [Tipos de componentes](#tipos-de-componentes)
  - [Interpolaciones (Mostrar datos)](#interpolaciones-mostrar-datos)
  - [Map (Próximamente)](#map-próximamente)
  - [Props (Próximamente)](#props-próximamente)
  - [Eventos](#eventos)
    - [Eventos sintéticos](#eventos-sintéticos)
- [Hooks](#hooks)
  - [Tipos de Hook](#tipos-de-hook)
    - [Hooks con Datos](#hooks-con-datos)
    - [Hooks de optimización](#hooks-de-optimización)
    - [Hooks de Render](#hooks-de-render)
  - [¿Cuándo se usan los Hooks?](#cuándo-se-usan-los-hooks)
  - [¿En qué orden se ejecutan los Hooks?](#en-qué-orden-se-ejecutan-los-hooks)
  - [useState](#usestate)
    - [Usar useState con textos](#usar-usestate-con-textos)
    - [Usar useState con números](#usar-usestate-con-números)
    - [Usar useState con boolean](#usar-usestate-con-boolean)
    - [Usar useState con Arrays](#usar-usestate-con-arrays)
    - [Usar useState con Objetos](#usar-usestate-con-objetos)
  - [useEffect](#useeffect)
    - [useEffect con Efectos de Javascript](#useeffect-con-efectos-de-javascript)
  - [Custom Hook](#custom-hook)
    - [Custom Hook useFetch](#custom-hook-usefetch)
  - [useLayoutEffect](#uselayouteffect)
  - [useRef](#useref)
  - [useCallback](#usecallback)
  - [useMemo](#usememo)
  - [useContext](#usecontext)
  - [useReducer *(Próximamente)*](#usereducer-próximamente)
- [React Router](#react-router)
  - [¿Cómo se escribe?](#cómo-se-escribe)
  - [¿Cómo se escriben las rutas?](#cómo-se-escriben-las-rutas)
  - [¿Cómo navegamos?](#cómo-navegamos)
  - [Recibiendo datos desde la URL](#recibiendo-datos-desde-la-url)
  - [Creando subrutas](#creando-subrutas)
- [Styled Components](#styled-components)
  - [Usarlo cuando](#usarlo-cuando)
  - [Cambio de paradigma](#cambio-de-paradigma)
  - [Instalar Styled Components](#instalar-styled-components)
  - [Organizando los estilos](#organizando-los-estilos)
  - [Teoría](#teoría)
  - [Hijos en Styled Components](#hijos-en-styled-components)
  - [Functional Component + Styled Components](#functional-component--styled-components)
  - [Props en Styled Components](#props-en-styled-components)
    - [¿Porqué se escribe así?](#porqué-se-escribe-así)
    - [Dando estilos para un componente hijo](#dando-estilos-para-un-componente-hijo)
    - [Dando estilos directamente a un componente](#dando-estilos-directamente-a-un-componente)
  - [Theme Provider](#theme-provider)
  - [Global Style](#global-style)
- [Usando módulos externos](#usando-módulos-externos)
  - [Font-Awesome](#font-awesome)
- [TypeScript](#typescript)
  - [Instalación de ReactJS con Typescript](#instalación-de-reactjs-con-typescript)
    - [Instalación en tu proyecto actual](#instalación-en-tu-proyecto-actual)
    - [Instalación en una app con Create React App y TypeScript](#instalación-en-una-app-con-create-react-app-y-typescript)
    - [Instalación al crear la app con Vite](#instalación-al-crear-la-app-con-vite)
  - [Los archivos](#los-archivos)
  - [TypeScript en los Componentes](#typescript-en-los-componentes)
    - [Props de Componentes](#props-de-componentes)
      - [Definir el tipo de dato de las props con "interface"](#definir-el-tipo-de-dato-de-las-props-con-interface)
      - [Definir el tipo de dato de las props con "type"](#definir-el-tipo-de-dato-de-las-props-con-type)
      - [Definir children](#definir-children)
      - [Definir el tipo de dato de las props con "type" y "typeof"](#definir-el-tipo-de-dato-de-las-props-con-type-y-typeof)
  - [Definiendo las funciones](#definiendo-las-funciones)
  - [TypeScript en Hooks](#typescript-en-hooks)
    - [Interface vs Type](#interface-vs-type)
    - [useState con Interface](#usestate-con-interface)
    - [useState con "type"](#usestate-con-type)
    - [useRef con TypeScript](#useref-con-typescript)
    - [useReducer con TypeScript](#usereducer-con-typescript)
  - [TypeScript en Formularios](#typescript-en-formularios)
  - [TypeScript en fetch() (Próximamente)](#typescript-en-fetch-próximamente)
  - [TypeScript en axios() (Próximamente)](#typescript-en-axios-próximamente)
- [Diccionario](#diccionario)
  - [Higher Order Components (HOC)](#higher-order-components-hoc)
  - [Mutar / Mutable](#mutar--mutable)
  - [Flickering](#flickering)
- [Recursos](#recursos)

# Qué es ReactJS
ReactJS es una librería que permite interfaces de usaurio.

# Universo de React
Alrededor de React tenemos muchas herramientras, frameworks o módulos que van apareciendo en el mercado.
Vamos a analizar cada uno de ellos:
* ReactJS
* React Native: una librería para desarrollar aplicaciones nativas
* Redux: una librería para manejar el estado de la aplicación
* Next.js: una librería para desarrollar aplicaciones con React
* Styled Components: una librería para dar estilos a los componentes

# ¿Qué es JSX?
Combinación de HTML + JS.
Un archivo JS === JSX (Es lo mismo)

# Crear una nueva App de React

En la terminal ejecutaremos:

```bash
npm create vite@latest      # Creamos la app
cd nombre-app               # Entramos en la carpeta
npm i                       # Instalar dependecias
npm i styled-components -S  # (Opcional) Instalar styled
npm i -D sass               # (Opcional) Instalar SASS
npm run dev                 # Lanzaremos el servidor
```

Dentro de los archivos de la carpeta:
1. Limpiar CSS (Eliminar los css y sus imports en los jsx)
2. Limpiar el JSX, es decir el archivo `App.jsx`
3. Crear el archivo `theme.styled.jsx` con los datos
   1. Añadir la importación en `App.jsx` `import { ThemeProvider } from 'styled-components'`
   2. Añadir `<ThemeProvider></ThemeProvider>`
   3. Crear el archivo `theme.styled.jsx` (Custom Properties) e importar el objeto `theme`
   4. Importar el objeto `theme`dentro de `App.jsx` y añadirlo a la prop `theme={ theme }`
4. Crear el archivo para GlobalStyle
   

   
## Estructura de una App de React
Cuando creamos una app en React sea con la herramienta que sea siempre se crean varias carpetas:

* src: donde se encuentran los archivos de la app
* public: donde se encuentran los archivos estáticos (no se crea con ViteJS)
* package.json: donde se encuentra la configuración de la app

## Class vs Funcional
Existen dos variantes de ReactJS:
- Versión Class: Usa Class de Javascript
- Versión Funcional: Usa funciones y tiene los Hooks


# Sintáxis de React

## Sintáxis básica de un componente 
Existen varias formas de escribir un componente funcional:

- Usando Funciones Arrow
```jsx
import 'estilo.scss'

const App = () => {}

export default App
```

- Usando Funciones y `export default`
```jsx
import 'estilo.scss'

function App(){}

export default App
```

- Usando Funciones y `export`
```jsx
import 'estilo.scss'

export function App(){}
```

### Return de un componente funcional
Un componente que vaya a devolver JSX deberá de usar los `return ()`  y sólo devuelve 1 elemento, por ejemplo:
- 1 fragmento `<></>`
- 1 etiqueta `<div></div>`
  
Ejemplo con un fragmento:
```jsx
const App = () => {
  return (<></>)
}
```

Ejemplo con una etiqueta:
```jsx
const App = () => {
  return (<div></div>)
}
```

### Tipos de componentes
Existen 2 tipos de componentes dentro de ReactJS:
1. Stateless Functional Component: No tiene useState simplemente acepta Props
2. Stateful Component: Si tiene useState y manipula los datos
   

**Buenas prácticas para componentes**
* Crea componentes pequeños
* Crea componentes reutilizables
* Orden de los Hooks
* Usa Custom Hooks
* Si creas objetos mejor hazlo fuera de los componentes
* Usa callbacks poara los eventos

## Interpolaciones (Mostrar datos)
```jsx
{/* Con paréntesis */}
{ (mostrar) ? 'true' : 'false'}
{ (mostrar === true ) ? 'true' : 'false'}

{/* Sin paréntesis */}
{ mostrar ? 'true' : 'false' }
{ mostrar === true  ? 'true' : 'false'}

{/* Mostramos componentes */}
{ mostrar ? <Componente1 /> : ''}

{/* Es igual al de arriba: Mostramos 1 componente */}
{ mostrar && <Componente1 /> }

{/* Tenemos que mostrar 2 componentes */}
{ mostrar ? <Componente1 /> : <Componente2 />}
```

## Map (Próximamente)

## Props (Próximamente)

## Eventos


### Eventos sintéticos
ReactJS no devuelve un evento de Javascript sino que devuelve un `Evento sintético` y gracias a él ese evento será compatible con todos los navegadores e igual que pasaba en Angular nos devuelve los datos más usados pero también el evento original.

# Hooks

Cuando hablamos de React Hooks debemos de tener en cuenta que son funcionalidades.
Aquí te dejo algunas de los Hooks más conocidos.

- useState
- useEffect
- useLayoutEffect
- useRef
- useContext
- useMemo
- useCallback
- useReducer
- Custom Hook

## Tipos de Hook
Si vas a escribir algún Hook hazlo en el orden que te muestro:
1. Hooks con Datos
2. Hooks de optimización
3. Hooks de Render 

### Hooks con Datos

- **useContext** Datos que se COMPARTEN en todos los componentes
- **useState** Datos que CAMBIAN en 1 componente y RENDERIZAN ese componente
- **useRef** Datos que CAMBIAN en 1 componente y NO renderizan al componente

### Hooks de optimización

- **useReducer** Cuando estados MUY complejos: optimizar Estados
- **useMemo** Cuando queremos evitar RENDERIZADO de un <Hijo /> cuando el <Padre /> se RENDERIZA
- **useCallback** Pasar una función como prop de un <Padre /> a <Hijo />

### Hooks de Render

- **useLayoutEffect** ... para ejecutar cambios en los `styles`
- **useEffect** - Inicia ... para ejecutar acciones
- **useEffect** - cleanup se ejecuta al BORRAR al componente

## ¿Cuándo se usan los Hooks?

Los Hooks pertenecen al ciclo de vida de un Componente.

- ⬇️ Fase 1: Recoger los datos
- ⬇️ Fase 2: Aplicar cambios/cálculos en base a los datos recogidos
- ⬇️ Fase 3: Muestra los datos en Vista (JSX)
  - 🔃 Si cambia un estado (Renderiza)
- ⬇️ Fase 4: Se destruye el componente

## ¿En qué orden se ejecutan los Hooks?

Vamos a suponer que los uso TODOS.

1. useContext
2. useState -> (Muuuuuy grande) -> useReducer
3. useRef
4. useLayoutEffect
5. useEffect - Inicia  
   [PAUSA] Muestra los datos en Vista (JSX)
6. useState - Cambia (Forzar el Renderizado del Componente)
7. useEffect - cleanup

## useState

Nos permite gestionar el estado de un componente. Es una propiedad cuyo valor cambia al usar el método que le asignamos.
¡Cuidado! No debemos de añadirlos dentro de una estructura lógica o función.

**¿Cuándo se usa?**

Cuando tenemos una propiedad que queremos que cambie por ejemplo al hacer un click usamos `useState`.

**¿Cómo se escribe?**

Pues para escribirlo tenemos varias formas sintácticas.

```javascript
import { useState } from "react"

const Componente = () => {
  let [variable, setVariable] = useState("valor inicial")
}
```

### Usar useState con textos

Podemos cambiar los valores sin problemas.

```javascript
import { useState } from "react"

const Componente = () => {
  let [variable, setVariable] = useState("Timmy")
}
```

### Usar useState con números

Podemos cambiar los valores sin problemas.

```javascript
import { useState } from "react"

const Componente = () => {
  let [variable, setVariable] = useState(0)
}
```

### Usar useState con boolean

Podemos cambiar el valor de un Boolean de forma sencilla

```javascript
import { useState } from "react"

const Componente = () => {
  let [variable, setVariable] = useState(false)

  let cambiarValor = () => {
    setVariable(!varible)
  }
}
```

### Usar useState con Arrays

```javascript
import { useState } from "react"

const Componente = () => {
  let [semana, setSemana] = useState(["Lunes", "Martes"])

  let anadirDia = () => {
    setSemana([...semana, "Miércoles"])
  }
}
```

### Usar useState con Objetos

```javascript
import { useState } from "react"

const Componente = () => {
  let [alumno, setAlumno] = useState({
    nombre: "Timy",
    apellido: "Anderson",
  })

  let anadirPropiedad = () => {
    setSemana([{ ...alumno, edad: 32 }])
  }
}
```



## useEffect

Se ejecuta cada vez que se inicia, renderiza o destruye un componente. Y se suele usar para:

- Inicializar variables
- Llamar a APIs
- Leer datos desde LocalStorage
- Realizar efectos con Javascript

Es decir siempre debemos de usarlo para tareas asíncronas.

[Enlace a la documentación oficial](https://es.reactjs.org/docs/hooks-effect.html)

En la práctica siempre escribiremos:

```javascript
import { useEffect } from "react"

const Componente = () => {
  useEffect(() => {
    console.log("Ejecuta algo")
  }, [])
}
```

Pero para verlo paso a paso:

```javascript
import { useEffect } from "react"

const Componente = () => {
  useEffect(() => {
    console.log("Ejecuta algo")
  })
}
```

También podemos usarlo con useState:

```javascript
import { useState, useEffect } from "react"

const Componente = () => {
  let [estado, setEstado] = useState(0)

  useEffect(() => {
    console.log(estado)
  })
}
```

También podemos ejecutarlo sólo al inicio:

```javascript
import { useState, useEffect } from "react"

const Componente = () => {
  useEffect(() => {
    console.log("algo")
  }, [])
}
```

También podemos usarlo varios useState pero que sólo se ejecute con uno:

```jsx
import { useState, useEffect } from "react"

const Componente = () => {
  let [estado, setEstado] = useState(0)
  let [estado1, setEstado] = useState(0)

  useEffect(() => {
    console.log(estado)
    console.log(estado1)
  }, [estado])
}
```

### useEffect con Efectos de Javascript

Cuando tenemos componentes stateless que además usan tienen efectos por ejemplo de Mousemove, es cuando usaremos la función de cleanup.

```jsx
const Card = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  const { x, y } = coords

  useEffect(() => {
    const moverRaton = (e) => {
      const coords = { x: e.clientX, y: e.clientY }
      setCoords(coords)
    }

    window.addEventListener("mousemove", moverRaton)

    return () => {
      window.removeEventListener("mousemove", moverRaton)
    }
  }, [])

  return <> Componente que tiene efectos </>
}
```



## Custom Hook

Podemos crear nuestros propios Hooks para optimizar y reutilizar lógica de nuestra aplicación.
[Documentación Oficial](https://es.reactjs.org/docs/hooks-custom.html)

```javascript
export const useNombre = (valorInicial = "valor") => {
  /* Ejecutamos acciones con el valor Inicial */
  return "Valor que devuelve"
}
```

### Custom Hook useFetch

Podemos crearnos un Hook para hacer el useFetch. Primero en nuestro archivo del Hook `useFetch.js` tenemos:

```javascript
import { useState, useEffect } from "react"

export const useFetch = (url) => {
  const [estado, setEstado] = useState({
    data: null,
    loading: true,
    error: null,
  })

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setEstado({
          loading: false,
          error: null,
          data,
        })
      })
  }, [url])

  return estado
}
```

Después en el Componente tenemos:

```javascript
import { useFetch } from "./hooks/rutaAlFetch"

const Componente = ({}) => {
  const datos = useFetch(`https://url-de-una-api.com/`)
  console.log(datos)
}
```



## useLayoutEffect

Es muy parecido a useEffect, pero se ejecuta antes y normalmente lo usamos para sincronizar estado internos con externos sin cambios de renderizado.

También podemos ejecutarlo sólo al inicio:

```javascript
import { useLayoutEffect } from "react"

const Componente = () => {
  useLayoutEffect(() => {
    console.log("algo")
  }, [])
}
```



## useRef
[Próximamente](https://dev.to/duxtech/como-rayos-funciona-el-hook-useref-en-react-2lah#:~:text=useRef%20es%20un%20hook%20que,con%20una%20%C3%BAnica%20propiedad%20current%20)
Nos permite guardar un dato como useEffect pero el componente NO se renderiza.

Además nos permite acceder directamente a valores de etiquetas HTML y guardar ese valor.

```javascript
import { useRef } from "react"
const Componente = () => {
  // Si queremos un valor inicial
  const variable = useRef("valorInicial")
  // Si no queremos un valor inicial
  const variable = useRef(null)
}
```

**¿Cuándo se usa?**

Por ejemplo con `<input>`

```javascript
import { useRef } from "react"
const Componente = () => {
  const variable = useRef("valorInicial")

  return <input type="text" ref={variable} />
}
```



## useCallback

_(Próximamente)_

Nos permite guardar y memorizar una función.

```javascript
import { memo, useCallback, useState } from "react"

export const Padre = () => {
  const [foto, setFoto] = useState(0)

  const aumentarFoto = Padre(() => {
    setFoto((cambio) => cambio + 1)
  }, [foto])

  return (
    <div className="Padre">
      <Hijo aumentarFoto={aumentarFoto} />
    </div>
  )
}

export const Hijo = ({ aumentarFoto }) => {
  console.log("Hijo 1 💩")
  return (
    <div>
      <h3>Hijo</h3>
      <button
        onClick={() => {
          aumentarFoto()
        }}
      >
        Aumentar Foto
      </button>
    </div>
  )
}
export const Hijo = memo(({ aumentarFoto }) => {
  console.log("Hijo 2 😊")
  return (
    <div>
      {" "}
      <button
        onClick={() => {
          aumentarFoto()
        }}
      >
        Aumentar Foto
      </button>
    </div>
  )
})
```



## useMemo

_(Próximamente)_
Nos permite optimizar nuestra app al memorizar funciones que tengan gran carga de rendimiento: bucles grandes, muchos valores de array...

También si usamos el HOC Memo podemos memorizar Componentes y que sólo se renderizen cuando cambies sus props. Esto se aplica a Componentes hijos que no se deben de renderizar cuando haya un cambio de estado en un Componente Padre.

## useContext

Nos permite guardar propiedades en el contexto de la aplicación, es decir que se pueden acceder desde cualquier componente sin necesidad de tener que pasarla mediante props.

Primero creamos un archivo js que contenga información, por ejemplo `context.js`

```javascript
// En el archivo context.js
export const datos = {
  alumno: {
    nombre: "Timmy",
    edad: 32,
  },
  clase: {
    numero: "1",
    alumnos: 5,
  },
}

/*  Si sólo queremos añadir datos */
export const GlobalContext = React.createContext(datos)
```

Y después podemos acceder a estos datos simplemente:

```javascript
import { datos } from 'ruta'
import { GlobalContext } from 'ruta'

const App = () => {
  return (
    <>
      {/* Si sólo queremos añadir datos */}
      <GlobalContext.Provider value={datos}>
        Otros componentes
      </GlobalContext.Provider>

      {/*  Si queremos añadir datos y un método para cambiar los datos*/}
      <GlobalContext.Provider
        value={{
          datos: datosGlobales,
          actualizarDatos: setDatosGlobales,
        }}
      >
        Otros componentes
      </GlobalContext.Provider>
    </>
  )
}
```

Y en un componente que se encuetre dentro tendremos:

```javascript
const Componente = () => {
  let { datos, actualizarDatos } = useContext(GlobalContext)
}
```

**Combinando useContext con useState** *(Próximamente)*

## useReducer *(Próximamente)*

Nos permite manejar estado complejos mediante una función que reduce su complejidad.
Cuando hablamos de un estado complejo hablamos de un estado con muchas propiedades.

```javascript
function reducer(state, action) {
  switch (action) {
    case "increment":
      return state.prop + 1
    case "decrement":
      return state.prop - 1
    default:
      throw new Error()
  }
}
```

# React Router
Cuando hablamos de React Router hablamos de la capacidad de navegar entre diferentes páginas de la aplicación, estas páginas con componentes que aparecen en base a la url de la app.

## ¿Cómo se escribe?
En el archivo `App.jsx` debemos de:

```jsx
/* Importar los objetos del router */
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom'

export const App = () => { return (
    /* Toda la App debe de estar dentro de <Router> */
    <Router>
        <Routes>
            {/* Cada Ruta carga un componente */}
            <Route path="/"            element={ <Inicio />  }/>
            <Route path="/about"       element={ <About  />  }/>
            <Route path="*"            element={ <Error  />  }/>
        </Routes>
    </Router>
  )
}

```

## ¿Cómo se escriben las rutas?
Depende de si queremos enviar datos por la ruta o redirigirlas existen varias formas de escribirlas.
```jsx
<Route path="/"            element={ <Inicio   />  }/>
<Route path="/trabajos"    element={ <Trabajos />  }/>
<Route path="/trabajo/:id" element={ <Trabajo  />  }/>
<Route path="*"            element={ <Error    />  }/>
<Route path="/works"       element={ <Navigate to="/trabajos" />  }/>  

{/* Para hacer subrutas */}
<Route path="/contacto/*"  element={ <Contacto />  }>
    <Route path="facebook"  element={ <h2>Facebook</h2>}/>
    <Route path="instagram" element={ <h2>Instagram</h2>}/>
</Route>
```

## ¿Cómo navegamos?
En vez de usar la etiqueta `<a>` usaremos `<NavLink`, para ello debemos de:

Importar NavLink desde `react-router-dom`:
```jsx
import { NavLink } from 'react-router-dom'
```

Y luego en el componente donde vayamos a poner la navegación usaremos:
```jsx
<NavLink to="/trabajo/1" >Ir al trabajo 1</NavLink>
<NavLink to="/trabajo/1" >Ir al trabajo 2</NavLink>
```

## Recibiendo datos desde la URL
Para recibir datos de la url primero deberemos de configurar esa Ruta con parámetros:
```jsx
<Route path="/trabajo/:id" element={ <Trabajo />   }/>
```

Y luego podemos recibirlos en el componente con `useParams()`

```jsx
import { useParams } from 'react-router-dom'

const Trabajo = ({}) => {
    const { id } = useParams()
}
```

## Creando subrutas
Cuando hablamos de subrutas hablamos de más rutas dentro de otras, es decir no pasamos datos sino que entramos en otra subpágina.

Primero configuramos esas subrutas en el `App.jsx`:

```jsx
<Route path="/contacto/*"  element={ <Contacto />  }>
    <Route path="facebook"  element={ <h2>Facebook</h2>}/>
    <Route path="instagram" element={ <h2>Instagram</h2>}/>
</Route>
```

Y luego en el componente donde lo vaya a usar:
```jsx
import { Route , Routes } from 'react-router-dom'

const Contacto = ({}) => { return (
<>
<Routes>
    <Route path="facebook"  element={ <h2>Facebook</h2>}/>
    <Route path="instagram" element={ <OtroComponente />}/>
</Routes>
</>
)}
```


# Styled Components
Nos permiten dar estilos a los componentes de React, es muy importante saber que:
* Los Styled Components se pueden aplicar a cualquier componente que acepte `className`
* Nos permiten "olvidarnos" de className
* Se pueden combinar con archivos css/scss
[https://marketplace.viwsualstudio.com/items?itemName=mf.vscode-styled-components&ssr=false#review-details](https://marketplace.visualstudio.com/items?itemName=mf.vscode-styled-components&ssr=false#review-details
)
## Usarlo cuando

* Componentes pequeños 
* Componentes cuyo estilo cambia con un State

## Cambio de paradigma

Cuando hablamos de los Styled-components podemos crear "etiquetas de HTML" sin ser "etiquetas de HTML". Es decir que definimos la etiqueta con los Styled Components.
Aunque también podemos añadir estilos a un componente.

## Instalar Styled Components

```bash
npm install styled-components --save
npm i styled-components -S

# Si vamos a usar TypeScript debemos además de añadir los tipos de datos para StyledComponents
npm i --save-dev @types/styled-components
```

## Organizando los estilos

Vamos a crear una carpeta dentro de `Components` que se llame `styles`

Una opción de uso es: Dentro de esta carpeta crearemos un archivo para cada Componente.
Por ejemplo `Componente.styled.js`.

## Teoría

Hay varias cosas a tener en cuenta cuando creamos un Styled Components y es que vamos definir varias cosas:
1. La etiqueta que será nuestro Componente
1. Los estilos que tendrá

También debemos de tener en cuenta que existen varias formas de usarlo:
1. Podemos aplicarlo dentro de un componente contenedor (App.jsx) para un componente hijo (Componente.jsx)
1. Podemos aplicarlo a un componente directamente (Componente.jsx)


```javascript
// Importamos Styled Components
import styled from 'styled-components'

export const NombreComponente = styled.etiquetaHTML`
    propiedadCSS:valor
    propiedadCSS:valor
    propiedadCSS:valor
`
```

Y en el `App.jsx` ponemos:

```javascript
/* Importamos  el archivo que hemos creado y como tiene el mismo nombre que nuestro componente se aplica automáticamente */
import { NombreComponente } from './rutaAlArchivoStyled'

const App () => {
    return (
        <>
            /* No debemos de hacer nada, ya que se aplica sólo porque tiene el mismo nombre */
            <NombreComponente />
        </>
    )
}
```

## Hijos en Styled Components
Lo bueno es que la forma de da estilos es **muy** parecida a SCSS, es decir:

```javascript
// Importamos Styled Components
import styled from 'styled-components'

export const NombreComponente = styled.etiquetaHTML`
    propiedadCSS:valor
    propiedadCSS:valor

    etiqueta{
        propiedadCSS:valor
    }

    &:hover{}
    &:active{}
    &:focus{}
    &:visited{}
`
```

## Functional Component + Styled Components
Podemos aplicar styled-components a un Functional Component.
```jsx
import styled from 'styled-components'

/* Opción 1: Usando el punto . */
const StyledView = styled.View`
    background-color: red;
`
/* Opción 2: Usando paréntesis () */
const StyledView = styled.View`
    background-color: red;
`
const View = ( { className } )=> ( <div className={ className }>FC Component</div>)

```

## Props en Styled Components
Lo bueno es que la forma de da estilos es **muy** parecida a SCSS, es decir:

```javascript
// Importamos Styled Components
import styled from 'styled-components'

export const NombreComponente = styled.etiquetaHTML`
    propiedadCSS: ${ ({bg}) => bg }
    propiedadCSS: ${ ({bg}) => bg || 'valorPorDefecto'}
    propiedadCSS:valor
`
```

Y en el `Componente.jsx` ponemos:

```javascript
/* Importamos  el archivo que hemos creado y como tiene el mismo nombre que nuestro componente se aplica automáticamente. */

import { Etiqueta } from './Components/Etiqueta.styled.js'

const Componente () => {
    return (
        <Etiqueta bg='valor'>Soy Etiqueta</Etiqueta>
    )
}
```

### ¿Porqué se escribe así?
Para comprender el porqué se escribe así te pongo un pequeño ejemplo:

```jsx
// Así se escribiría de forma básica
const Nombre = styled.div` background : red `

// Así se escribiría con un Template String
const Nombre = styled.div` background : ${ 'red' } `

// Así se escribiría con una función que devuelve un string
const Nombre = styled.div` background : ${ () => 'red' } `

// Así se escribiría con una función que recibe props y devuelve su valor
const Nombre = styled.div` background : ${ ( props ) => props.bg } `

// Así se escribiría con una función que recibe props, la deconstruimos y devuelve su valor
const Nombre = styled.div` background : ${ ({ bg }) => bg } `
```

### Dando estilos para un componente hijo

Creamos nuestro estilo para usarlo dentro del componente principal:

```javascript
// Importamos Styled Components
import styled from 'styled-components'

export const Componente = styled.div`
    width:10em
    height:10em
    background:red
`
```

Y en el `App.jsx` ponemos:

```javascript
/* Importamos  el archivo que hemos creado y como tiene el mismo nombre que nuestro componente se aplica automáticamente */
import { Componente } from './Components/'

const App () => {
    return (
        <>
            /* No debemos de hacer nada, ya que se aplica sólo porque tiene el mismo nombre */
            <Componente />
        </>
    )
}
```

### Dando estilos directamente a un componente

Creamos nuestro estilo para usarlo dentro del componente principal en un archivo llamado `Etiqueta.styled.js`

```javascript
// Importamos Styled Components
import styled from 'styled-components'

export const Etiqueta = styled.div`
    width:10em
    height:10em
    background:red
`
```

Y en el `Componente.jsx` ponemos:

```javascript
/* Importamos  el archivo que hemos creado y como tiene el mismo nombre que nuestro componente se aplica automáticamente */
import { Etiqueta } from './Components/Etiqueta.styled.js'

const Componente () => {
    return (
        <Etiqueta>Soy Etiqueta</Etiqueta>
    )
}
```
***

## Theme Provider

Nos permite crear propiedades para dar estilo mediante Props a cualquier Styled Component que creemos. Digamos que es el equivalente a las Custom Properties de CSS.

```javascript
/* Importamos  el archivo que hemos creado y como tiene el mismo nombre que nuestro componente se aplica automáticamente */
import { Componente } from './Components/'
import { ThemeProvider } from 'styled-components'

const theme = {
    colores : {
        rojo   : 'red',
        morao  : 'purple',
        lima   : 'lime',
    }
}

const App () => {
    return (
        <ThemeProvider theme={ theme }>
        <>
            /* No debemos de hacer nada, ya que se aplica sólo porque tiene el mismo nombre */
            <Componente />
        </>
        </ThemeProvider>
    )
}
```

En el archivo `Etiqueta.styled.js`

```javascript
// Importamos Styled Components
import styled from 'styled-components'

export const Etiqueta = styled.div`
    width:10em
    height:10em
    background:${ ({ theme })=> theme.colors.rojo }
`
```


## Global Style

Creamos un archivo llamado `GlobalStyles.styled.js`

```javascript
// Importamos Styled Components
import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    /* Añadimos el reset */
    *{
        margin:0
        ...
    }
    /* Podemos acceder a los colores del ThemeProvider */
    a{
        color : ${ ({ theme })=> theme.colores.rojo }
    }
`
```

Y dentro de nuestro archivo `App.jsx`:
```javascript
import { Componente }    from './Components/'
import { GlobalStyles }  from './rutaAlArchivo/GlobalStyles.styled.js'
import { ThemeProvider } from 'styled-components'

const theme = {
    colores : {
        rojo   : 'red',
        morao  : 'purple',
        lima   : 'lime',
    }
}

const App () => {
    return (
        <ThemeProvider theme={ theme }>
        /* Añadimos el objeto GlobalStyles*/
        <GlobalStyles />
        <>
            <Componente />
        </>
        </ThemeProvider>
    )
}
```


# Usando módulos externos 
## Font-Awesome
```bash
npm i --save @fortawesome/fontawesome-svg-core
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
npm i --save @fortawesome/react-fontawesome@latest

```

```jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

<FontAwesomeIcon icon={faCoffee} />
```


# TypeScript
Usar TypeScript en ReactJS es muy útil y una buena práctica .

## Instalación de ReactJS con Typescript 
Para instalar ReactJS con Typescript se debe hacer lo siguiente:

### Instalación en tu proyecto actual
Puedes instalarlo con el comando:

```bash
npm i -D typescript
```

### Instalación en una app con Create React App y TypeScript
Para crear una app con ReactJS con TypeScript se debe hacer lo siguiente:
```bash
npx create-react-app my-app --typescript
```

### Instalación al crear la app con Vite

Aunque en las últimas versiones de ViteJS te lo pregunta, puedes también usar el comando:

```bash
npx vite create my-app --typescript
```

## Los archivos
Los archivos serán `ts` o `tsx` así que no te preocupes porque no existen diferencias.

## TypeScript en los Componentes
Podemos definir el tipo de dato de los componentes y existen varias formas:
* Usando JSX.Element
* Usando Function Component

Se escriben así:
```tsx
/* Definiendo con JSX.Element */
const App = () : JSX.Element => {}

/* Definiendo con FunctionComponent */
const App : React.FunctionComponent = () => {}

/* Definiendo con FC (Functional Component) */
const App : React.FC = () => {}
```

Y veamos sus diferencias:
* **Tipo de dato Function Component / FC**
  * No funciona bien con defaultProps
  * No permite usas genéricos de TypeScript
  * Implica que la función tiene el retorno implícito
  * Sólo sirve para expresiones de función
  * Posiblemente desaparezca de ReactJS [https://github.com/facebook/create-react-app/pull/8177](https://github.com/facebook/create-react-app/pull/8177)
  * Mejor usar en su defecto VoidFunctionComponent *(React.VFC)* 

* **JSX.Element**
  * Se usa junto a interface o type para "Props"
  * Implica que la función NO tiene el retorno implícito
  * Permite usar genéricos de Typescript
  * Se puede usar tanto para funciones como para expresiones

Por lo tanto y como resumen usaremos JSX.Element por defecto.

### Props de Componentes
Existen varias formas de definir el tipo de dato de las props.
* Definir el tipo de dato de las props con "interface"
* Definir el tipo de dato de las props con "type"
* Definir el tipo de dato de las props en la constante defaultProps y el "type Props" hace su trabajo

#### Definir el tipo de dato de las props con "interface"
```tsx
interface Props {
    nombre : string,
    edad   : number,    
}

const Componente = ({ nombre , edad  } : Props) : JSX.Element => {
    return ( <>Soy Componente</>)
}

Componente.defaultProps = {
    nombre : '',
    edad   : 0,
}

export default Componente
```

#### Definir el tipo de dato de las props con "type"
```tsx
type Props = {
    nombre : string,
    edad   : number,    
}

const Componente = ({ nombre , edad  } : Props) : JSX.Element => {
    return ( <>Soy Componente</>)
}

Componente.defaultProps = {
    nombre : '',
    edad   : 0,
}

export default Componente
```

#### Definir children
Para definir Children tenemos 2 formas de hacerlo:
* La primera es usando React.ReactNode
* La segunda es usando ReactNode pero importándolo antes

Ejemplo de a primera forma con React.ReactNode
```tsx
type Props = { children? : React.ReactNode, }

export const Componente = ({ children  } : Props) : JSX.Element => {
    return ( <>{ children }</>)
}
```

Ejemplo de la segunda forma con ReactNode
```tsx
import {ReactNode} from 'react'
type Props = { children? : ReactNode }

export const Componente = ({ children  } : Props) : JSX.Element => {
    return ( <>{ children }</>)
}
```

#### Definir el tipo de dato de las props con "type" y "typeof"
```tsx
/* Estamos asignando un tipo de PROPS o que Cojan el tipo de dato de la constante defaultProps  */
type Props = { nombre : string, edad   : number } & typeof defaultProps

/* Definimos el valor por defecto de las Props y el "type Props" hace su trabajo */
const defaultProps = {
    nombre : 'Timmy',
    edad   : 0,
}

const Componente = ({ nombre , edad  } : Props) => {
    return ( <> Soy Componente </> )
}

Componente.defaultProps = defaultProps

export default Componente
```


## Definiendo las funciones

A las funciones debemos de definirle el tipo de dato que devuelve...

```tsx
interface Alumno {
    nombre : string,
    edad   : number,
  }
  
  const App = () : JSX.Element => {
  
    /* Sin nada */
    const nombreFuncion1 = () : void => {}
    const nombreFuncion2 = () : void => {}
    const nombreFuncion3 = () : void => {}
    const nombreFuncion4 = () : void => {}
    const nombreFuncion5 = () : void => {}
    const nombreFuncion6 = () : void => {}
    const nombreFuncion7 = () : void => {}
    
    /* Con tipado en return y {} */
    const nombreFuncion1a = () : any     => { return 1 }
    const nombreFuncion2a = () : string  => { return 'valor' }
    const nombreFuncion4a = () : number  => { return 1 }
    const nombreFuncion5a = () : boolean => { return true }
    const nombreFuncion6a = () : Alumno  => { return { nombre: '', edad: 0 } }
    const nombreFuncion7a = () : Alumno[] => { return [ { nombre: '', edad: 0 } ] }
    
    /* Con tipado en return y SIN {} */
    const nombreFuncion1b = () : any     => 1
    const nombreFuncion2b = () : string  => 'valor'
    const nombreFuncion4b = () : number  => 1
    const nombreFuncion5b = () : boolean => true
    const nombreFuncion6b = () : Alumno  => ({ nombre : '', edad : 0 })
    const nombreFuncion7b = () : Alumno[] => [ { nombre : '', edad : 0 } ]
  
    /* Sin tipado en return y tipado en parámetros */
    const nombreFuncion1c = ( param : any )            : any      => param
    const nombreFuncion2c = ( param : string )         : string   => param
    const nombreFuncion4c = ( param : number )         : number   => param
    const nombreFuncion5c = ( param : boolean )        : boolean  => param
    const nombreFuncion6c = ( param : Alumno )         : Alumno   => param
    const nombreFuncion7c = ( param : Alumno[] )       : Alumno[] => param
    const nombreFuncion7d = ( param : Array<Alumno> )  : Array<Alumno> => param
  
    return (
      <div className="App">Soy App</div>
    )
  }
  
  export default App
```

## TypeScript en Hooks

### Interface vs Type
En principio funcionan igual pero existe una gran diferencia entre Type e Interface es que TypeScript está basado en TypeScript se puede extender.
Recomendación: siempre usamos **interface**.

### useState con Interface
Al usar useState debemos de definir el tipo de dato también

```tsx
import { useState } from 'react'

interface Alumno {
    nombre : string,
    edad   : number,
}

const Componente = () : any => {

    const [estado0  , setEstado0  ] = useState<any>(true)
    const [estado1  , setEstado1  ] = useState<string>('valor')
    const [estado2  , setEstado2  ] = useState<number>(1)
    const [estado3  , setEstado3  ] = useState<boolean>(true)

    const [estado4  , setEstado4  ] = useState<Array<any>>(['Lunes'])
    const [estado4a , setEstado4a ] = useState<any[]>(['Lunes'])

    const [estado5  , setEstado5  ] = useState<Array<string>>(['Lunes'])
    const [estado5a , setEstado5a ] = useState<string[]>(['Lunes'])
    const [estado6  , setEstado6  ] = useState<Array<number>>([1])
    const [estado6a , setEstado6a ] = useState<number[]>([1])
    const [estado7  , setEstado7  ] = useState<Array<boolean>>([true])
    const [estado7a , setEstado7a ] = useState<boolean[]>([true])

    const [clase1   , setClase1 ]   = useState<Array<Alumno>>([{ nombre : 'Timmy' , edad : 32 }])
    const [clase2   , setClase2 ]   = useState<Alumno[]>([{ nombre : 'Timmy' , edad : 32 }])

    /* Recuerda usar el operador | para definir múltiples tipos */
    const [estado10  , setEstado10  ] = useState<string | any>(true)

    return( <>Soy Componente</> )
}

export default Componente
```

### useState con "type"
También podemos usar type para definir los tipos de datos que usaremos en el estado

```tsx
import { useState } from 'react'

/* Podemos crear Tipos de datos para ahorrar trabajo */
type texto    = string
type numero   = number
type siNo     = boolean
type loquesea = any

/* Podemos crear tipos Array con los tipos de datos */
type muchosLoQueSea  = Array<any>
type muchosTexto     = Array<string>
type muchosNumero    = Array<number>
type muchosSiNo      = Array<boolean>
type muchosAlumnos   = Array<Alumno>

/* Se pueden combinar con los tipos creados */
type muchosLoQueSea2 = Array<loquesea>
type muchosTexto2    = Array<texto>
type muchosNumero2   = Array<numero>
type muchosSiNo2     = Array<siNo>

interface Alumno {
  nombre : string,
  edad   : number,
}

const Componente = ({} : any ) : JSX.Element => {

  const [estado0 , setEstado0 ] = useState<loquesea>(true)
  const [estado1 , setEstado1 ] = useState<texto>('valor')
  const [estado2 , setEstado2 ] = useState<numero>(1)
  const [estado3 , setEstado3 ] = useState<siNo>(true)
  const [estado4 , setEstado4 ] = useState<muchosLoQueSea>(['Lunes'])
  const [estado5 , setEstado5 ] = useState<muchosTexto>(['Lunes'])
  const [estado6 , setEstado6 ] = useState<muchosNumero>([1])
  const [estado7 , setEstado7 ] = useState<muchosSiNo>([true])
  const [clase1  , setClase1  ] = useState<muchosAlumnos>([{ nombre : 'Timmy' , edad : 32 }])

  /* Recuerda usar el operador | para definir múltiples tipos */
  const [estado10  , setEstado10  ] = useState<string | any>(true)

  return( <>Soy Componente</> )
}

Componente.defaultProps = {}

export default Componente
```
**Agrupación de los types**
Podemos crear un interface que tenga los tipos de datos y asingarlos dentro del useState para separarlos:

```tsx
import { useState } from 'react'

interface State {
    nombre : string,
    edad   : number,
    cursos : string[]
}

const Componente = () : any => {

    const [estado0  , setEstado0  ] = useState<State['nombre']>(true)
    const [estado1  , setEstado1  ] = useState<State['edad']>('valor')
    const [estado2  , setEstado2  ] = useState<State['cursos']>(1)
}
```

### useRef con TypeScript

```tsx
const App = () => {

  // Si no podemos definir el valor por defecto mejor poner 'null'
  const inputRef = useRef<HTMLInputElement>(null)
}
```

### useReducer con TypeScript

```tsx


const ESTADO_INICIAL = {
  nombre : '',
  edad   : 0,
}
type formReducerAction = {
  type : 'nombre' | 'edad',
  value : string | number
} | type : clear

const formReducer = (state : State, action : formReducerAction ) : State => {
  switch(action.type) {
    case 'nombre':
      return {
        ...state,
        nombre : action.payload,
      }
    case 'edad':
      return {
        ...state,
        edad : action.payload,
      }
    case 'RESET':
      return ESTADO_INICIAL
    default:
      return state
  }
}

const App = () => {

  const [alumno, setAlumno] = useState(ESTADO_INICIAL)

  const [ valorInputs , dispatch ] = useReducer(alumnoReducer , ESTADO_INICIAL)

  const handleChange = ( {target} : React.ChangeEvent<HTMLInputElement>) => {
    setAlumno({
      ...alumno,
      [target.name] : target.value
    })
  }
  const clearAlumno = () => {
    setAlumno(ESTADO_INICIAL)
  }
}
```

## TypeScript en Formularios
En el caso de los fomularios debemos de definir el tipo de dato de una forma algo especial.

```tsx
import React, { useState } from "react"

const Componente = ({ nombre , edad  } : any ) : JSX.Element => {

    const [valorInput1 , setValorInput1] = useState<string>('nombre')
    const [valorInput2 , setValorInput2] = useState<string>('email')
    const [valorInput3 , setValorInput3] = useState<boolean>(false)

    /* Podemos definir el tipo en el parámetro */
    const onChange1  = ( e : React.FormEvent<HTMLInputElement>)    : void => {}
    const onChange2  = ( e : React.FormEvent<HTMLInputElement>)    : void => {}
    const onChange3  = ( e : React.FormEvent<HTMLInputElement>)    : void => {}
    const onChange4  = ( e : React.FormEvent<HTMLInputElement>)    : void => {}
    const onChange5  = ( e : React.FormEvent<HTMLTextAreaElement>) : void => {}
    const onChange6  = ( e : React.FormEvent<HTMLSelectElement>)   : void => {}
    
    
    /* O también lo podemos definir en la constante */
    const onChange1a : React.ChangeEventHandler<HTMLInputElement>    = ( e ) : void => {}
    const onChange2a : React.ChangeEventHandler<HTMLInputElement>    = ( e ) : void => {}
    const onChange3a : React.ChangeEventHandler<HTMLInputElement>    = ( e ) : void => {}
    const onChange4a : React.ChangeEventHandler<HTMLInputElement>    = ( e )    : void => {}
    const onChange5a : React.ChangeEventHandler<HTMLTextAreaElement> = ( e ) : void => {}
    const onChange6a : React.ChangeEventHandler<HTMLSelectElement>   = ( e )   : void => {}

    return (
        <>
            <input type="text"      value={ valorInput1 } onChange={ onChange1 }/>
            <input type="email"     value={ valorInput2 } onChange={ onChange2 }/>
            <input type="checkbox"  onChange={ onChange3 }/>
            <input type="radio"     onChange={ onChange4 }/>
            <textarea onChange={ onChange5 }></textarea> 
            <select onChange={ onChange6 }>
                <option value="valor1">Primer valor</option>
            </select>
        </>
    )
}

Componente.defaultProps = {} 

export default Componente

```

## TypeScript en fetch() (Próximamente) 

Usando fetch podemos definir el tipo de dato de la respuesta del servidor:
Recordemos como era el fetch en Javascript Nativo:
```tsx
  fetch('url')
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
}
```

Entonces podemos definir de la siguiente forma:

```tsx
/* Definimos los datos que recibiremos */
interface Datos = { nombre : string , edad : number }

/* Definiendo el tipo de dato como return de la función */
const fetchData = () : Promise<Datos[]> => fetch('url') .then(res => res.json())

/* También podemos definir el tipo de dato del res.JSON */
const fetchData = () : Promise<Datos[]> => fetch('url') .then(res => res.json() as Promise<Datos[]>)

fetchData().then( data => {
  console.log(data)
})
```

## TypeScript en axios() (Próximamente)
Recordemos como era el fetch con axios:
```tsx
  axios('url')
    .then(data => {
      console.log(data)
    })
}
```

Pero Axios tiene una forma de definir los datos:

```tsx
/* Definimos los datos que recibiremos */
interface Datos = { nombre : string , edad : number }

/* Definiendo el tipo de dato como return de la función */
const axiosData = () => axios<Datos[]>('url') .then(res => res.data)

axiosData()
```

> Recordemos que Axios hay que instalarlo e importalo previamente



# Diccionario

## Higher Order Components (HOC)

Es un patrón o técnica avanzada para el reuso de la lógica de React.
Es una función que recibe un componente y devuelve otro.

## Mutar / Mutable

Los datos mutables son los datos que nos permiten modificar o actualizar su valor.
Si por ejemplo tenemos un objeto y mediante una función añadimos una propiedad nueva dentro de ese objeto, ese objeto ha sido mutado.

## Flickering

Efecto donde se ven de forma visual como un elemento de HTML se "mueve" justo antes al renderizar el componente o mostrarlo en el navegador.

# Recursos
* [https://github.com/typescript-cheatsheets/react-typescript-cheatsheet-es](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet-es)
* [React Dev Tools para Firefox](https://addons.mozilla.org/es/firefox/addon/react-devtools/)
* [React Dev Tools para Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=es)
