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

# ExpressJS

## Middleware

Es un código que se ejecuta entre la petición y la llegada al servidor. Middleware de Express: `Router`, Middleware de terceros: `Morgan`, `Helmet`.

## Repaso NodeJS

```bash
node init -y

npm i nodemon

npx nodemon index
```

### ESModules

Para utilizar ESModules, en el `package.json` tenemos que añadir la linea `type`:

```json
{
  "name": "CommonJS_esModules",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "npx nodemon index",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "type": "module", // Esta vaina
  "author": "",
  "license": "ISC",
  "dependencies": {
    "nodemon": "^2.0.16"
  }
}
```

```js
// funciones.js

let saludo = () => {
    console.log("Hola");
}

export let despedida = () => {
    console.log("Adios")
}

export default saludo;

// index.js

import saludo , { despedida } from './funciones.js'

saludo();
despedida();
```

### CommonJS

Es la sintaxis que utiliza NodeJS por defecto. El `type` del `package.json` tiene que ser `"commonjs"`.

```js
// funciones.js

module.exports = {
    saludo,
    despedida
}

//index.js

const { saludo , despedida } = require('./funciones.js')

saludo();
despedida();

```

## Instalación e Estructura básica

```bash
npm init -y

npm i express 
npm i nodemon -D

npm i cors
npm i helmet
npm i morgan -D
```

Importamos `express` del módulo que hemos instalado. Esta variable es una función, que renombramos con `app`.

```js
const express = require('express');
const app     = express();
const router  = express.Router();

// Leer datos
app.get( '/' , ( req , res ) => {
    res.json( array );
});
app.post();         // Añadir datos
app.put();          // Actualizar datos
app.delete();       // Borrar datos

app.listen(3000);
```

### Params y Query

Cuando pasamos parametros por la URL, como por ejemplo `http://localhost:5000/peliculas?nombre=Emma&apellido=Watson`.

En el método `GET`, podemos recibir datos de dos maneras:

1. A través de `req.params` -> (`http://localhost:5000/peliculas`)

```js
    let { id } = req.params.id;
```

2. A través de `req.query` -> (`http://localhost:5000/?nombre=Emma&apellido=Watson`)

```js
    let { nombre , apellido } = req.query;
```

En el método `POST` se envía y recibe la información a través del body

```js
    let { nombre , apellido } = req.body;
```

### Router

```js
const router = express.Router();

app.use( router );

router.route('/')
    .get    ( (  req , res ) => {
        res.json("Estoy en / haciendo get");
    })
    .post   ( (  req , res ) => {
        res.json("Estoy en / haciendo post");
    })
    .put    ( (  req , res ) => {
        res.json("Estoy en / haciendo put");
    })
    .delete ( (  req , res ) => {
        res.json("Estoy en / haciendo delete");
    })
```

## Método POST con Formularios

```js
const postAlumno = ( req , res ) => {

    const { nombre } = req.body;

    clase.push({
        id : clase.length,
        nombre
    })

    let data = clase;
    let msj  = 'Alumno añadido';

    res.status(200).json({ data , msj })
}
```

### React

```js

```