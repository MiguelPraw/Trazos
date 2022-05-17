# MongoDB

- [MongoDB](#mongodb)
  - [¿Qué es?](#qué-es)
  - [¿Qué herramientas existen?](#qué-herramientas-existen)
  - [Estructura de MongoDB](#estructura-de-mongodb)
  - [Cómo usar MongoDB](#cómo-usar-mongodb)
  - [Instalación](#instalación)
    - [Instalar MongoDB en Mac](#instalar-mongodb-en-mac)
    - [Instalar MongoDB en Windows](#instalar-mongodb-en-windows)
      - [Opción 1: Iniciar el servicio desde Símbolo de sistema y en modo Administrador](#opción-1-iniciar-el-servicio-desde-símbolo-de-sistema-y-en-modo-administrador)
      - [Opción 2: Desde la Powershell](#opción-2-desde-la-powershell)
    - [Soluciones que funcionan](#soluciones-que-funcionan)
  - [Cómo usar MongoDB](#cómo-usar-mongodb-1)
  - [Herramientas para trabajar](#herramientas-para-trabajar)
- [Mongoose](#mongoose)
  - [Que es Mongoose](#que-es-mongoose)
  - [Cómo instalar Mongoose](#cómo-instalar-mongoose)
  - [Usando Mongoose en ExpressJS](#usando-mongoose-en-expressjs)
  - [Conectando con mongoose](#conectando-con-mongoose)
    - [Usando Mongoose con `useUnifiedTopology`](#usando-mongoose-con-useunifiedtopology)
    - [Usando Mongoose sin `useUnifiedTopology`](#usando-mongoose-sin-useunifiedtopology)
    - [Mongoose y Variables de Entorno](#mongoose-y-variables-de-entorno)
  - [Acciones con Mongoose](#acciones-con-mongoose)
    - [Buscando documentos](#buscando-documentos)
      - [Filtros en Mongoose](#filtros-en-mongoose)
        - [Filtros generales](#filtros-generales)
        - [Filtros para .find()](#filtros-para-find)
        - [Filtros para update(), updateOne(), updateMany(), replaceOne(), findOneAndUpdate() y findByIdAndUpdate()](#filtros-para-update-updateone-updatemany-replaceone-findoneandupdate-y-findbyidandupdate)
        - [Filtros para find(), findOne(), findById(), findOneAndUpdate() y findByIdAndUpdate()](#filtros-para-find-findone-findbyid-findoneandupdate-y-findbyidandupdate)
      - [Operadores (Próximamente)](#operadores-próximamente)
        - [Operadores de comparación](#operadores-de-comparación)
        - [Operadores lógicos](#operadores-lógicos)
    - [Guardando / Insertando un documento](#guardando--insertando-un-documento)
    - [Actualizando un documento](#actualizando-un-documento)
    - [Borrando un documento](#borrando-un-documento)
- [Gestionando errores](#gestionando-errores)
  - [Usando Try/catch](#usando-trycatch)
  - [Usando .then()](#usando-then)
  - [Tipos de errores](#tipos-de-errores)
  - [Gestionando los errores con un Middleware](#gestionando-los-errores-con-un-middleware)
  
## ¿Qué es?
Es un sistema para guardar información en formato JSON. Se denomina bases de datos NOSQL o NO relacionales.
Y dentro del entorno de MongoDB existen varias herramientas de que debemos de conocer.


## ¿Qué herramientas existen?
 * MongoDB: Sistema de BD
 * Mongo Compass: UI que nos permite gestionar las BD
 * Mongo Shell / MongoSH: CLI de MongoDB
 * Mongo Atlas: Servidor / Cluster online
 
 De forma extra y como conectaremos nuestra api en ExpressJS existe `Mongoose`.
`Mongoose` es un módulo para NodeJS que nos permite conectar NodeJS con MongoDB.

## Estructura de MongoDB
* BBDD: Contiene un conjunto de Colecciones
* Collection: Es un conjunto de Documentos
* Documents: Son cada objeto en formato JSON


## Cómo usar MongoDB
Siempre tendremos 2 aplicaciones abiertas:
* Terminal/Powershell con `mongo` iniciado
* MongoDB Compass

## Instalación

### Instalar MongoDB en Mac
Te dejo un enlace del instalador oficial [aquí](https://docs.mongodb.com/manual/installation/)

Pero voy a explicártelo paso a paso:

```bash
# Paso 1 (Sólo se hace 1 vez)
xcode-select --install
# Paso 2 (Sólo se hace 1 vez)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
# Paso 3 (Sólo se hace 1 vez)
brew tap mongodb/brew
# Paso 4 (Sólo se hace 1 vez)
brew install mongodb-community@5.0


# Iniciar el servicio 
brew services start mongodb-community@5.0

# Parar el servicio 
brew services stop mongodb-community@5.0
```


### Instalar MongoDB en Windows

#### Opción 1: Iniciar el servicio desde Símbolo de sistema y en modo Administrador
**Problema** MongoNetworkError: connect ECONNREFUSED 127.0.0.1:27017 al ejecutar `mongo` o `mongosh`

**Solución** Para iniciar el servicio buscamos `Símbolo de sistema` haciendo click derecho y `ejecutar como administrador`.
Escribimos entonces la siguiente línea:

```bash
net start mongodb
```

#### Opción 2: Desde la Powershell
**Problema** No se encontró el comando mongo, pero existe en la ubicación actual.

**Solución** Dentro de `Powershell` entramos en la carpeta donde está instalado Mongo: `C:\Program Files\MongoDB\Server\5.0\bin` y ejecutamos Mongo con `mongosh` o `mongo`


Si entramos en la carpeta funcionan las 2 opciones:
```bash
cd "C:\Program Files\MongoDB\Server\5.0\bin"  # Paso 1
.\mongo                                       # Paso 2
mongo                                         # Paso 2
```

Para evitar tener que escribir `C:\Program Files\MongoDB\Server\5.0\bin` podemos añadirlo a variables de entorno.

1. Buscamos `Editar Variables de Entorno` en Windows
2. Hacemos click en el botón `Variables de entorno`
3. Buscamos en la segunda caja `path`
4. Elegimos `path` y hacemos click en `Editar`.
5. Añadimos la ruta de nuestro MongoDB `C:\Program Files\MongoDB\Server\5.0\bin`
6. Cerramos cualquier `Powershell` o `Símbolo de sistema` y volvemos a ejecutar `mongo` o `mongosh`


### Soluciones que funcionan
* [https://www.youtube.com/watch?v=v_YbbNVIEI8](https://www.youtube.com/watch?v=v_YbbNVIEI8)
* [https://www.youtube.com/watch?v=Z478ODY4ceQ](https://www.youtube.com/watch?v=Z478ODY4ceQ)



## Cómo usar MongoDB
Siempre tendremos 2 aplicaciones abiertas:
* Terminal /Powershell con `mongo` iniciado
* MongoDB Compass

## Herramientas para trabajar
· [Quicktype.io](https://quicktype.io/)
· [JSON Converter](https://www.convertsimple.com/convert-javascript-to-json/)

# Mongoose

## Que es Mongoose
Mongoose es una librería para mapear objetos de una base de datos relacional a una estructura de datos orientada a objetos.

## Cómo instalar Mongoose
Para poder instalar Mongoose debemos tener instalado MongoDB y en nuestra Api instalar mediante npm:

```bash
npm install mongoose
npm i mongoose
```

## Usando Mongoose en ExpressJS
Vamos a ver un ejemplo de Mongoose al completo:
```js
/* Primero lo importamos */
const mongoose = require('mongoose')

/* Segundo conectamos con la MongoDB */
mongoose.connect('mongodb://localhost:27017/nombre-bbdd', { 
    useNewUrlParser     : true,
    useUnifiedTopology  : true,
    useFindAndModify    : false,
    useCreateIndex      : true
})

/* Tercero: Configuramos un Schema de datos */
const alumnoSchema = new mongoose.Schema(
    { id: String , nombre : String , apellido : String },
    { collection: 'nombre-de-la-coleccion' ,  }
)

/* Cuarto: Conectamos Mongoose con el Schema */
const Alumno = mongoose.model('Alumno', alumnoSchema)
```

## Conectando con mongoose
El primer paso para poder unir nuestra api en expressJS con Mongo es conectarla. Y esta conexión puede tener 3 partes:
* URL con la base de datos
* Opciones de conexión
* Callback al finalizar la conexión
  
```js
mongoose.connect(  'url/nombre-bbdd' , {options} , callback() )
```

Vamos a verlo por partes, comencemos por la forma básica:

```js
mongoose.connect('mongodb://localhost:27017/nombre-bbdd')
```

Podemos añadirle ciertas opciones de conexión:
* useNewUrlParser: MongoDB analiza la URL de la conexión
* useUnifiedTopology: Usa el nuevo driver de conexión de MongoDB
* useCreateIndex: Mongoose compila por defecto con el index usando `ensureIndex()`, si es `true` compilará con `createIndex()`
* useFindAndModify: Si es `true` Mongoose usará `findOneAndUpdate()` en lugar de `findOneAndUpdate()`
* promiseLibrary: Usa una librería de promesas para la conexión
* poolSize: Número máximo de sockets que mantendrá abierto MongoDB, por defecto es 5.
* socketTimeoutMS: Tiempo que Mongo esperará la respuesta de una conexión
* family: Configuramos si se con IPv4 o IPv6
* authSource: Configuramos que el usuario se conecte con usuario y contraseña

> Nota: Si no se especifica ninguna opción, MongoDB usará los valores por defecto.

> Nota 2: Si usamos `useUnifiedTopology` o no determina las opciones de conexión:

### Usando Mongoose con `useUnifiedTopology`

### Usando Mongoose sin `useUnifiedTopology`
* autoReconnect: Reconecta automáticamente a MongoDB si se produce un error
* reconnectTries: Número de intentos de reconectar
* reconnectInterval: Intervalo de tiempo entre intentos de reconectar
* bufferMaxEntries: Número máximo de documentos que se guardarán en el buffer
* connectTimeoutMS: Tiempo máximo de espera de la conexión

```js
mongoose.connect( 'mongodb://localhost:27017/nombre-bbdd', {
    useNewUrlParser     : true,
    useUnifiedTopology  : true,
    useFindAndModify    : false,
    useCreateIndex      : true
})
```

También podemos asignarle un callback:
```js
mongoose.connect( 'mongodb://localhost:27017/nombre-bbdd', {
    useNewUrlParser     : true,
    useUnifiedTopology  : true,
    useFindAndModify    : false,
    useCreateIndex      : true
    } , ()=>{
        console.log('MongoDB Conectado')
    })
```

Para hacer una conexión limpia deberíamos añadirlo a una función asíncrona y esperar a la respuesta del servidor de Mongo.

```js
let conectar = async () => await mongoose.connect('mongodb://localhost:27017/nombre-bbdd' , {
        useNewUrlParser     : true,
        useUnifiedTopology  : true,
        useFindAndModify    : false,
        useCreateIndex      : true
    } , ()=>{
        console.log(`MongoDB Conectado`)
    })

conectar()
```

Aunque también podemos usar el `try/catch`:
```js
try {
    await mongoose.connect('mongodb://localhost:27017/nombre-bbdd' , {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log(`MongoDB Conectado`)
} catch (error) {
    console.log(`Error al conectar MongoDB: ${error}`)
}
```

Y podemos usar `.then()`:
```js
mongoose.connect('mongodb://localhost:27017/nombre-bbdd' , {
    useNewUrlParser     : true,
        useUnifiedTopology  : true,
        useFindAndModify    : false,
        useCreateIndex      : true
}).then(()=>{
    console.log(`MongoDB Conectado`)
}).catch(error=>{
    console.log(`Error al conectar MongoDB: ${error}`)
})
```

### Mongoose y Variables de Entorno
Los datos a la hora conectar Mongoose con MongoDB se pueden configurar en un archivo de variables de entorno.
Por ejemplo en nuestro archivo `.env`

```env
puerto=5000
user=admin
pass=12345
bbdd=nombre
server=server.api.com
```

**Opción 1** Y en nuestra api las podemos importar gracias a `dotenv` y aplicarlas dentro de la conexión:

```js
const { puerto , user , pass , server, bbdd } = require('dotenv').config().parsed

let conectar = async () => await mongoose.connect(`mongodb://${server}:${puerto}/${bbdd}` , {
    useNewUrlParser     : true,
        useUnifiedTopology  : true,
        useFindAndModify    : false,
        useCreateIndex      : true
} , ()=>{
    console.log(`MongoDB Conectado`)
})
```
**Opción 2** Podemos guardarla URI directamente 

```env
mongo_uri=mongodb://server.api.com:5000/nombre
```

Para asignarlo directamente en el `mongoose.connect`:
```js
const { mongo_uri } = require('dotenv').config().parsed

let conectar = async () => await mongoose.connect(mongo_uri , {
    useNewUrlParser: true,
    useUnifiedTopology: true
} , ()=>{
    console.log(`MongoDB Conectado`)
})
```


**Opción 3** Si usamos la forma de conexión antigua:
```js
const { puerto , user , pass , server, bbdd } = require('dotenv').config().parsed

let conectar = async () => await mongoose.connect(`mongodb+srv://${user}:${pass}@clusterX.mongodb.net/${bbdd}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
} , ()=>{
    console.log(`MongoDB Conectado`)
})
```

## Acciones con Mongoose

### Buscando documentos
Cuando ejecutamos un método de Mongoose se puede hacer con `async/await` o mediante `.then().catch()`

Veamos unos ejemplos simples:
```js
/* Buscamos TODOS los datos */
const buscar1 = Alumno.find()

/* Buscamos 1 dato en base a una propiedad */
const buscar2 = Alumno.find({ nombre : 'Emma'})

/* Buscamos 1 dato en base a varias propiedades */
const buscar2 = Alumno.find({ nombre : 'Emma' , apellido : 'Watson' })
const buscar  = Alumno.find() 

/* Buscamos 1 dato en base a 1 ID */
const buscar3 = Alumno.findById("621e7cd001fec7a3d32680b6")

/* También podemos usar .find() con la propiedad id */
const buscar4 = Alumno.find({ "id" : "627ce18645897004cfd7eb1d" })
```


#### Filtros en Mongoose
Mongoose tiene varios filtros que podemos aplicar a cualquier acción.

##### Filtros generales
* strict: Si es true, Mongoose no permitirá que se cree un documento con una propiedad que no existe en la colección.
* collation: Permite definir una regla de comparación para los documentos.
* session: Permite definir una sesión para la consulta.
* explain: Permite obtener información sobre la consulta.
  
##### Filtros para .find()
Podemos filtrar lo que encuentra con `.find()` con ciertos parámetros:

* .limit(): Limita el número de documentos que se devuelven
* .sort(): Ordena los datos por una propiedad *El valor 1 indica ascendente y el -1 descendente*
* .skip(): Salta los datos que no se devuelven
* .lean(): Convierte los datos a JSON
* .select(): Selecciona los datos que se devuelven. *El valor 1 indica que se devuelve ese dato y el -1 que no.*
* tailable: Indica que el cursor espera a que se agreguen nuevos datos
* allowDiskUse: Indica que se puede usar el disco duro
* batchSize: Indica el tamaño del lote de datos que se devuelven
* readPreference: Indica la preferencia de lectura
* hint: Indica la propiedad por la que se ordenará
* comment: Indica un comentario
* snapshot: Indica que se devuelve un snapshot
* maxscan: Indica el número máximo de documentos que se pueden leer

```js
const buscar = await Alumno.find({ nombre : 'Emma' })
    .limit(10)
    .sort({ apellido : 1 })
    .skip(10)
    .select({ curso : 1, nombre : 1 }) 
    
```
##### Filtros para update(), updateOne(), updateMany(), replaceOne(), findOneAndUpdate() y findByIdAndUpdate()
Los filtros disponibles son:
* upsert: Indica si se crea un nuevo documento si no se encuentra el documento
* writeConcern: Indica el nivel de aseguramiento de escritura
* timestamps: Indica si se agrega una propiedad de fecha de creación y modificación
* overwriteDiscriminatorKey: Indica si se sobreescribe la propiedad discriminatorKey

##### Filtros para find(), findOne(), findById(), findOneAndUpdate() y findByIdAndUpdate()
Los filtros disponibles son:
* lean: Indica que se devuelve un JSON
* populate: Indica que se devuelven los datos de una relación
* projection: 


#### Operadores (Próximamente)

##### Operadores de comparación 
Dentro de una búsqueda podemos usar operadores de comparación y para ello podemos crear un objeto con las siguientes propiedades:
* $eq : Igual a
* $ne : Diferente a
* $gt : Mayor que
* $gte : Mayor o igual que
* $lt : Menor que
* $lte : Menor o igual que
* $in : En
* $nin : No en
* $all : Todos
* $elemMatch : Elemento
* $exists : Existe
* $type : Tipo
* $regex : Expresión regular
* $not : Negación
* $mod : Modulo
* $size : Tamaño

Si lo queremos aplicar a alguno:

```js
const buscar = Alumno
    .find({ edad : { $gte:18 , $lte:30 } })
```

##### Operadores lógicos
Los operadores lógicos nos permiten hacer una búsqueda mucho más exacta y para ello existen:
* .or() : Uno de los valores de la condición
* .and() : Todos los valores de la condición
* .nor() : Ninguno de los valores de la condición
* .nand() : Ninguno de los valores de la condición

```js
const buscar = Alumno
    .find({ nombre : 'Emma' })
```

### Guardando / Insertando un documento
```js
const alumno = new Alumno({
    nombre : 'Emma',
    apellido : 'Watson'
})

alumno.save()
```

### Actualizando un documento
```js
Alumno.findByIdAndUpdate("6221af562322b8ba1d462986", { nombre : 'Emma' })
```

### Borrando un documento

```js
Alumno.findByIdAndRemove("621e7cd001fec7a3d32680b4")
```


# Gestionando errores 

Al gestionar los errores de las peticiones existen varias formas de hacerlo:
* Usando `try/catch` *(Más usado)*
* Usando `.then()` *(Ideal)*

## Usando Try/catch 

```js
async ( req , res ) => {
    
    try {
        await Alumno.findByIdAndRemove("621e7cd001fec7a3d32680b4")
        mongoose.connection.close()
        res.status(200).json( {data , msj : 'Funciona'} )
    } catch (e) {
        mongoose.connection.close()
        res.status(500).json({ msj: e.message })
    }
}
```

## Usando .then()

```js
( req , res ) => {

    Alumno
    .findByIdAndRemove("621e7cd001fec7a3d32680b4")
        .then(()   => res.json('Alumno encontrado'))
        .catch(e => {
            mongoose.connection.close()
            res.status(400).json({ msj : e.message }
        })
}
```

**Ejemplo con .find()**
```js
// Ejemplo con `.then().catch()`:
const buscar1 = Alumno.find().then( data => data ).catch( err => { err })

// Con `async/await`:
const buscar1 = await Alumno.find()
```

## Tipos de errores
Dentro de Mongoose nos podemos encontrar varios tipos de errores: 
* CastError: Error de tipo de dato
* DivergentArrayError: Error de array
* DocumentNotFoundError: Error de documento no encontrado
* MissingSchemaError: Error de schema
* MongooseServerError: Error de servidor
* OverwriteModelError: Error de sobreescritura
* ParamsError: Error de parámetros
* StrictModeError: Error de modo estricto
* ValidationError: Error de validación
* VersionError: Error de versión
* messages: Mensaje de error


## Gestionando los errores con un Middleware
Basándonos en los posibles errores podemos gestionar cualquier conexión que haga nuestra API con Mongoose y de error, para ello podemos:

```js
app.use( ( err , req , res , next )=>{
    if( err.name === 'CastError' ){
        res.status(400).send({ msj : err })
    }else{
        res.status(500).send({ msj : err })
    }
    next()
})
```