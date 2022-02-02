


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