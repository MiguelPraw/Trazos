
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
promesa_contenido.then( respuesta => {
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

### JQuery

```js

$('.cuadrado').on( {

    click: function () {
        console.log('click en cada elemento');
        this.classList.toggle('selected');

        //Todo elemento NATIVO puede convertirse a jQuery
        // $( nodoNativo ) => elemento_jQuery

        $( this ).toggleClass('selected');

    }

});

```

## Hide, Show, Toggle, Slide

```js

$('btn').on( {
   
   click: function () {
       /*
       $('h1').hide(3000, () => {
           $('h1').show(1000);
       });
       */

        $('h1').hide ({
            duration: 3000,
            easing: 'linear'
        });
   }
});

```

## Animate

```js

    $('#cuadrado').on({
        
        click: function () {
            $(this).animate({
                'width':'200px',
                'height':'200px',
                'left':'100px'
            }, 1000).animate({
                'width':'150px'
            });
        }
    })

    // Despues de animate puedes hacer una function de callback, o volver a poner un .animate porque el .animate devuelve el mismo objeto jQuery

```

## Cambiar Imagen

```html

<button id="btnChange"> Cambia Imagen </button>
<img src="https://picsum.photos/id/237/200/300" alt="">


```

```js

$('#btnChange').on({
    click: function () {
        let oldSrc = $('img').attr('src');
        let randomImg = Math.trunc(Math.random() * 100 + 200);
        let nuevoValor = `https://picsum.photos/id/${randomImg}/200/300`;
        $('img').attr('src', nuevoValor);
    }
});

$('img').on({
    error: function () {
        console.log("ERROR");
        $(this).attr('src', 'https://picsum.photos/id/237/200/300');
    }
});

```

### Estilos computados

```js

let body = document.querySelector('body');

let style = getComputedStyle(body);
let background = style.getPropertyValue('background-color');
console.log(background);

// jQuery

console.log($('body').css('background-color'));

```

### Posición elementos navegador

```html

<div id="primario">
    <h2>Secundario</h2>
</div>

<div id="secundario">
    <h2>Secundario</h2>
</div>

```

```js

let nodoSecundario = document.querySelector('#secundario')
let dom_rect_bound = nodoSecundario.getBoundingClientRect();
console.log(dom_rect_bound);

// jQuery

// Posicion con respecto a document
let offset = $('#secundario h2').offset();
console.log(offset);

let posicion = $('#secundario h2').position();
console.log(posicion);

// El posicion te calcula la posicion en funcion al contenedor padre
// El padre tiene que tener posicion relative para hacer de referencia

```

### Evento Wheel y Scroll

```js

// WHEEL

let saturacion = 100;
let luminosidad = 74;

$('primario').on({
    wheel: function (evento) {
        console.log("Wheel");
        console.log(evento);
        console.log(evento.originalEvent.deltaY);
        evento.preventDefault();

        if(evento.originalEvent.deltaY > 0 && saturacion < 100) {
            saturacion++;
        } else if (evento.originalEvent.deltaY < 0 && saturacion > 0){
            saturacion--;
        }

        if(evento.originalEvent.deltaX > 0 && luminosidad < 100) {
            luminosidad++;
        } else if (evento.originalEvent.deltaX < 0 && luminosidad > 0){
            luminosidad--;
        }

        let style = getComputedStyle(this);
        console.log(style.getPropertyValue('background-color'));
        $(this).css({
            'background-color' : `hsl(17, ${saturacion}%, ${luminosidad}%)`
        })
    }
});

// SCROLL -> lo genera el objeto que ha sido desbordado

$(window).on({
    scroll: function (evento) {

        //Cantidad de pixeles que han sido desbordados por arriba
        let top_scroll = $(window).scrollTop();
        console.log(top_scroll);
        
        console.log($('body').height());

        let posicion_secundario = $('#secundario').offset();
        let tam_window = $(window).height();

        if (tam_window + top_scroll >= posicion_secundario.top) {
            console.log("Entrando");
        }
    }
});



```
