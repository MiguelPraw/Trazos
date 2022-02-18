
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

## PROMESAS JS

### Creación y resolucion de promesas

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

# JQuery

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

# APIS

## API de Speech

```html

<button id="start">Reconocer Voz</button>
<button id="stop">Parar</button>
<span id="confianza"></span>
<div id="texto">

</div>

```


```js

let recognition = new webkitSpeechRecognition();
console.log(recognition);

recognition.continuous = true;
recognition.lang = "es-ES";

$('#start').on({
    click: function () {
        //Empieza a reconocer la voz
        recognition.start();
    }
});

$('#stop').on({
    click: function() {
        recognition.abort();
    }
});

recognition.onresult = (evento) => {
    //evento.results
    console.log(evento.results);
    // cojo la ultima linea
    
    let texto = evento.results[evento.results.length - 1][0].transcript;
    let confianza = evento.results[evento.results.length - 1][0].confiance;

    pintaTexto(texto, confiance);
}

function pintaTexto (texto, confianza) {
    $('#texto').append(texto);
    $('#confianza').text(confianza);
}

function voz (texto) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = texto;
    speech.volume = 2;
    speech.pitch = 1;
    speech.rate = 1;
    window.speechSynthesis.speak(speech);
}

```

# JSON (JavaScript Object Notation)

## Objeto -> JSON (Método Stringify)

```js

let alumno = {
    nombre: "Pepe",
    apellido: "Gómez"
}

let json_alumno = JSON.stringify(alumno);

```

## JSON -> Objeto (Método Parse)

```js

console.log(JSON.parse(json_alumno));

```

## Local Storage (Almacenamiento local en el navegador como Bases de Datos)

### Guardar Datos

```js

localStorage.setItem('coche', 'Mercedes');

```

### Pedir Datos

```js

let miCoche = localStorage.getItem('coche');
console.log(miCoche);

```

### Borrar Datos

```js

localStorage.removeItem('coche');

```

# Drag and Drop

## jQuery

```html
<div id="grid">
    <div class="cuadrado"></div>
    <div class="cuadrado"></div>
    <div class="cuadrado"></div>
    <div class="cuadrado"></div>
</div>

<div id="drop">
    <span id="count">0</span>
</div>
```

```js

// Se necesita jQuery UI
let contador = 0;

$('.cuadrado').draggable({
    cursor: 'move',
    opacity: 0.5,
    //distance: 100,
    //grid: [100, 100],
    revert: true,
    revertDuration: 2000,
    enable: false,
    start: function (evento) {
        $(this).draggable('disable');

        setTimeout( () => {
            $(this).draggable('enable');
        }, 4000);
    }
});

$('#drop').droppable({
    drop: function (evento, elementoUi) {
        console.log(elementoUi);
        contador++;
        $('#count').html(contador);
        elementoUi.draggable.draggable({
            revert: false;
        });
        $(this).append(elementoUi.draggable);
    }
});

```

## JavaScript Nativo

```html
<div id="grid">
    <div class="cuadrado" draggable="true"></div>
    <div class="cuadrado" draggable="true"></div>
    <div class="cuadrado" draggable="true"></div>
    <div class="cuadrado" draggable="true"></div>
</div>

<div id="drop">
    <span id="count">0</span>
</div>
```

```js

$('.cuadrado').attr('draggable', true);

$('.cuadrado').on({
    dragstart: function (evento) {
        console.log(evento);
        evento.originalEvent.dataTransfer.setData('dato',this.id);
    }
})

$('#grid').on({
    dragover: function (evento) {
        evento.preventDefault(); 
        //Quiero permitir el drop
    },
    
    drop: function (evento) {
        evento.preventDefault();
        console.log(evento);
        console.log(evento.originalEvent.dataTransfer.getData('dato'));
        let id = evento.originalEvent.dataTransfer.getData('dato');
        $(this).append($("#"+id));
    }
})

```

# AJAX y API

## Llamadas asíncronas a un servidor

### jQuery

```js

// API REST -> Cada una de las peticiones que hacemos son unicas
// Endpoints -> Puntos de la API
// CRUD -> Agrupacion de endpoints que hacen algo sobre una entidad
// C: Create (POST -> Tienen Header y Body), R: Read (GET -> Solo tienen Header), U: Update (UPDATE), D: Delete (DELETE)

// jQuery

let base_img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
let next_url;

$.ajax ({
    method: "GET", // Si no lo ponemos, por defecto es GET
    url: "https://pokeapi.co/api/v2/pokemon/",
    success: function (respuesta) {

        pintaGrid (respuesta);
        
    },
    error: function (error) {
        console.log("Error");
        console.log(error);
    }
});

$('#btnNext').on({
    click: function () {
        $.ajax ({
            method: "GET",
            url: next_url,
            success: function (respuesta) {
                console.log(respuesta);
                pintaGrid(respuesta);
            },
            error: function () {

            }
        })
    }
})

function pintaGrid (respuesta) {
    console.log(respuesta);

    let count = respuesta.count;
    $('#numPokemon').html(count);
    next_url = respuesta.next;

    respuesta.results.forEach( pokemon => {
        let idPokemon = getId (pokemon.url);
        pintaPokemon(pokemon.name, idPokemon);
    });
}

function getId (url) {
    let split_url = url.split("pokemon/");
    return split_url[1].replace("/", "");
}

function pintaPokemon (nombre, id) {
    let nodoDiv = document.createElement('div');
    $(nodoDiv).addClass('pokemon').html(nombre);
    let timeout;
    // El load hace que cada vez que se actualiza el src se lance un nuevo Timeout
    let nodoImg = $('<img/>').attr('src', `${base_img}${id}.png`).on({
        load: function () {
            timeout = setTimeout( () => {
                if ($(this).attr('src').includes("back")) {
                    $(this).attr('src', `${base_img}${id}.png`);
                } else {
                    $(this).attr('src', `${base_img}back/${id}.png`);
                }
            }, 3000 * Math.random() + 500);
        },
        mouseenter: function () {
            clearTimeout(timeout);
        },
        mouseleave: function () {
            timeout = setTimeout( () => {
                if ($(this).attr('src').includes("back")) {
                    $(this).attr('src', `${base_img}${id}.png`);
                } else {
                    $(this).attr('src', `${base_img}back/${id}.png`);
                }
            }, 3000 * Math.random() + 500);
        }
    });
    $(nodoDiv).append(nodoImg);
    
    $('#grid').append(nodoDiv);
}

```

```html

<h1>Pokémon (<span id="numPokemon">0</span>)</h1>
<div id="grid">
    <div class="pokemon"> Pikachu </div>
</div>

<button id="btnNext"> Siguiente </button>
<button> </button>

```

### JS Nativo

```js

//JS Nativo

//Fetch -> Devuelve una promesa

    // Original Forma
    fetch('url').then(respuesta => { 
        console.log(respuesta);
        return respuesta.json(); // Body -> json -> a Object
    }).then( datos => {
        console.log(datos);
        // Hacer cosas con los datos
    })

    //Pa entenderlo

    let primeraRespuesta = fetch('url').then(respuesta => { 
        console.log(respuesta);
        return respuesta.json(); // Body -> json -> a Object
    });
    
    primeraRespuesta.then( datos => {
        console.log(datos);
        // Hacer cosas con los datos
    });

// Con Await

let promesa = fetch('url');

//async se usa cuando tengo promesas con await dentro de la funcion
async function getDatos () {
    try {
        // .then( respuesta => { } )
        let respuesta = await fetch('url');
        
        let respuesta2 = await respuesta.json(); //Devuelve una promesa
    } catch (error) {

    }
     
}

getDatos();

```

## API Authentication

```js

fetch ( url, {
    method: "GET",
    headers: {
        'Content-Type': 'application/json',
        //'Authoritation' -> en el caso de los gatos:
        'x-api-key': KEY
    }
}).then (respuesta => {
    return respuesta.json();
}).then (datos => {
    console.log(datos);
}).catch (error) {

};

//Para hacer el POST (gatos)
let bodyPost = {
    image_id: id_gato
}

fetch(url, {
    method: "POST",
    body: JSON.stringify(bodyPost);
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': KEY
    }
}).then (respuesta => {
    return respuesta.json();
}).catch (error) {
    
}

```