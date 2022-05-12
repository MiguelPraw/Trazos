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

## Yargs

```bash
npm i yargs
```

Sirve para facilitar el uso de argumentos en Node. 
Por ejemplo, nos sirve para filtar por el puerto que queremos abrir cuando abrimos el servidor. Para ello, en el `package.json` añadimos:

```json
"scripts": {
    "dev": "npx nodemon index --puerto=5000",
    "start": "npx nodemon index --puerto=7004",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
```

```js
const yargs  = require('yargs').argv
const { puerto } = require('yargs').argv

console.log( yargs );

app.listen( puerto , () => {
    console.log("Iniciando API en puerto " + puerto);
})
```

```bash
node index --puerto=5000    # Con Node

npm run start               # Abre la api en el puerto 7004
npm run dev                 # Abre la api en el puerto 5000
```

## Dotenv

Es una manera de poder poner visualmente datos que no vamos a poder meter en otro tipo de archivo.

Creamos un archivo `.env` en el que añadimos dichos datos.

```bash
CONTRASENIA="123"
```

En la API de Express, tras hacer el `npm i dotenv --save`:

```js 
const { CONTRASENIA } = require('dotenv').config().parsed

console.log( CONTRASENIA );
```

# Deploy

## Angular 

Para subir un proyecto, usamos el comando:

```bash
npm run build

ng build

ng build --configuation=production          # Con esta flag se optimiza aún más el deploy, cambiando el archivo de environment.ts por ejemplo

```

Nos genera una carpeta llamada `dist` que contiene todos los archivos construidos del proyecto.

## React

Comando:

```bash
npm run build

vite build
```

### Sitios para el deploy

1. Netlify
2. Heroku
3. Vercel

En Angular, cuando indicamos la ruta de la carpeta `dist`, debemos añadir la ruta de la carpeta del proyecto: `dist/nombre-carpeta`.

### Variables de entorno

Cuando despleguemos la API, en Angular hay que añadir las url en los archivos de la carpeta `environments`.

En `environment.ts`:

```ts
export const environment = {
  production: false,
  url       : 'http://localhost:5000/'
};

// Y en el environment.prod.ts:

export const environment = {
  production: true,
  url       : 'url-heroku'
};
```

En el servicio:

```ts
import { environment } from './../../environments/environment';

this.base_api = environment.url;
```

# MongoDB

* `MongoDB`                 : Sistema de BBDD
* `Mongo Compass`           : UI que nos permite gestionar las BBDD
* `Mongosh / Mongo Shell`   : CLI de MongoDB
* `Mongo Atlas`             : Servidor / Cluster donde se almacena online la BBDD
* `Mongoose`                : Módulo para NodeJS que nos permite conectar Node con MongoDB

## Mongoose

```bash
npm i mongoose
```

```js
const mongoose = require('mongoose');

/* Es mejor hacerlo de manera asíncrona */
const conectar = async () => {
    await mongoose.connect('mongodb://localhost:27017' , {
        useNewUrlParser : true,
        useUnifiedTopology : true
    } , () => {
        console.log("Conexion increible a MongoDB");
    });
}

conectar();

/* Creamos un esquema (interface) para cada dato de la colección */
const alumnoSchema = new mongoose.Schema(
    { nombre : String , apellido : String , edad : Number }, 
    { collection : "primer_turno" , versionKey : false } /* Con este parametro eliminamos el __v de mongo */
);

/* Asignamos ese modelo ( Schema ) */
const Alumno = mongoose.model( 'Alumno' , alumnoSchema );

app.get( '/' , async ( req , res ) => {

    const data = await Alumno.find({ nombre : 'Timmy' });

    res.status(200).json({
        data,
        msj : 'GET en Inicio'
    });
});
```

## Post con Mongoose

```js
app.post('/alumno' , async ( req , res ) => {

    const { nombre , apellido , edad } = req.body;

    const alumno = new Alumno({ nombre , apellido , edad }).catch( ( error ) => {
        console.log( error );
    });
    await alumno.save();

    res.status(200).json({
        data : [],
        msj : 'Alumno insertado'
    });
});
```

## Put con Mongoose

```js
app.put('/alumno' , async ( req , res ) => {

    const { id , nombre , apellido , edad } = req.body;

    let msj = 'To bien';
    const data = await Alumno.findByIdAndUpdate( id , { nombre , apellido , edad }).catch( error => {
        msj = 'El objeto no existe';
    });

    res.status(200).json({
        data,
        msj
    })
});

/* USANDO EL REST */
app.put('/alumno' , async ( req , res ) => {

    const { id , ...usuario } = req.body;

    let msj = 'To bien';
    const data = await Alumno.findByIdAndUpdate( id , usuario ).catch( error => {
        msj = 'El objeto no existe';
    });

    res.status(200).json({
        data,
        msj
    });
});
```

## Delete con Mongoose

```js
app.delete( '/alumno/:id' , async ( req , res ) => {

    const { id } = req.params;

    let msj = 'Borrado pelotudo';
    const data = await Alumno.findByIdAndDelete( id ).catch( error => {
        msj = 'No existe el pelotudo';
    });

    res.status(200).json({
        data,
        msj
    });
});
```