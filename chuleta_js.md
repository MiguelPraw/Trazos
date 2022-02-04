


### Selector identificador

```html

<div id="datos"> </div>

```

```js

datos; // En este caso, datos por ser un identificador, conecta con el elemento HTML
datos.innerHTML = "<h2> Añadir contenido con JS </h2>";


```

## Creación de funciones

```js

/*
    Función estándar
*/
function saluda(){

}

/*
    Función expresada
*/
const saludo_funcion_expresada = function(){
    console.log("Función anónima");
}

/*
    Función arrow
*/
const saludo_funcion_arrow = () => {
    console.log("Función arrow");
}



```

```js

let nodoBody = document.querySelector('body');

nodoBody.addEventListener ('mousemove', function () {

});

nodoBody.addEventListener ('mousedown', function () {

});

nodoBody.addEventListener ('mouseup', function () {

});

nodoBody.addEventListener ('keydown', function () {

});

nodoBody.addEventListener ('keyup', function () {

});


```

```js

function crearCirculo () {

}

function crearCuadrado () {

}

let callback_activo = crearCirculo;
let isPainting = true;

if (evento.key === 's') {
    callback_activo = crearCuadrado;
} else {
    callback_activo = crearCirculo;
}

nodoBody.addEventListener ('mousemove', function () {
    if (isPainting) {
        callback_Activo();
    }
});


```

### PROMESAS JS

## Creación y resolucion de promesas

```js

function readFilePromise ( file ) {
    // resolve -> callback -> Se ejecuta el codigo que hay en el then
    // reject -> callback -> Se ejecuta el codigo que hay en el catch
    return new Promise ( ( resolve , reject ) => {
        let texto = "Lorem ipsum";

        let time = Math.random() * 3000 + 500;
        let err = Math.random() > 0.8;

        setTimeout( () => {
            if (err) {
                reject ('Error en el archivo');
            } else {
                resolve(texto);
            }
        }, time);
    });
}

let promesa_contenido = redFilePromise ( 'miTexto.txt' );
console.log ( promesa_contenido );
promesa_contenido.then( ( respuesta ) => {
    console.log (respuesta); // texto
} ).catch (error => {
    console.log(error); // Error en el archivo
});

```

## AWAIT

```js
    // Hay que poner async si usamos await
    async function getContenido () {

        /*
            Este contenido, cuando se usa await -> Desenvuelve la promesa DIRECTAMENTE dentro de la variable.
            Resolve ( datos ) -> contenido = datos;
            Reject ( texto ) -> error = texto;
         */
        try {
            let contenido = await readFilePromise ( 'File' );
            console.log ( contenido );
            let archivoSecurizado = await securizaArchivo ();
            console.log (archivoSecurizado);
        } catch (error) {
            console.log(error);
        }

        // Centraliza los errores de los reject en el catch
        // Si a contenido le llega un reject, se salta la ejecucion del codigo y redirige el flujo al catch
    }

    getContenido();

```