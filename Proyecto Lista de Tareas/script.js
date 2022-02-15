'use strict'

let tareas = [];

let objetoMovido;

//localStorage.removeItem('tareas');

class Tarea {
    nombre;
    fecha;
    pendiente;
    contenidoHTML;

    constructor(nombre, fecha, estado = true, contenidoHTML = "") {
        this.nombre = nombre;
        this.fecha = fecha;
        this.pendiente = estado;
        this.contenidoHTML = contenidoHTML;
    }

    modificaEstado () {
        this.pendiente = !this.pendiente;
    }

    modificaContenidoHTML (contenido) {
        this.contenidoHTML = contenido;
    }

}

// Crea una tarea, la guarda y la pinta
function tramitaTarea (nombreTarea, fecha) {
    let tarea = new Tarea (nombreTarea, fecha);
    if (tareas === null) {
        tareas = [];
    }
    let contenidoTarea = construyeNodoTarea(tarea);
    tarea.modificaContenidoHTML(contenidoTarea);
    tareas.push(tarea);
    guardaTareasStorage();
    pintaTarea(tarea);
}

function guardaTareasStorage () {
    let tareas_json = JSON.stringify(tareas);
    localStorage.setItem('tareas', tareas_json);
}

//Lee todas las tareas del storage
function leeTareasStorage () {
    let tareasStorage = JSON.parse(localStorage.getItem('tareas'));
    tareasStorage.forEach( tareaStorage => {
        let tarea = new Tarea (tareaStorage.nombre, tareaStorage.fecha, tareaStorage.pendiente);
        let contenidoTarea = construyeNodoTarea(tarea);
        tarea.modificaContenidoHTML(contenidoTarea);
        tareas.push(tarea);
    })
}

function pintaTarea (tarea) {
    if (tarea.pendiente) {
        tarea.contenidoHTML.classList.remove('completado');
        $('.tareas__pendientes').append(tarea.contenidoHTML);
    } else {
        tarea.contenidoHTML.classList.add('completado');
        $('.tareas__completadas').append(tarea.contenidoHTML);
    }
}

//Pinta todas las tareas del array
function pintaTareas () {
    tareas.forEach( tarea => {
        pintaTarea(tarea);
    });
}

function construyeNodoTarea (tarea) {
    let nodoTarea = document.createElement('div');
    nodoTarea.classList.add('tarea');
    nodoTarea.classList.add('tareaFlex');

    let nodoNombre = document.createElement('span');
    nodoNombre.innerHTML = tarea.nombre;
    nodoTarea.appendChild(nodoNombre);

    let nodoFecha = document.createElement('span');
    let dias = devuelveDiasFaltantes(tarea.fecha);
    if (dias <= 0) {
        dias = 0;
    }
    nodoFecha.innerHTML = `Faltan ${dias} días`;
    nodoTarea.appendChild(nodoFecha);

    let nodoBotones = document.createElement('div');
    nodoBotones.classList.add('botones');
    let nodoBotonBorrar = document.createElement('span');
    let nodoBotonCompletar = document.createElement('span');
    let nodoBotonFavorito = document.createElement('span');
    nodoBotonBorrar.classList.add('borrar');
    nodoBotonCompletar.classList.add('completar');
    nodoBotonFavorito.classList.add('favorito');
    nodoBotonBorrar.innerHTML = `<i class="bi bi-folder-x"></i>`;
    nodoBotonCompletar.innerHTML = `<i class="bi bi-check2-square"></i>`;
    nodoBotonFavorito.innerHTML = `<i class="bi bi-chat-heart"></i>`;
    nodoBotones.appendChild(nodoBotonBorrar);
    nodoBotones.appendChild(nodoBotonCompletar);
    nodoBotones.appendChild(nodoBotonFavorito);
    
    nodoTarea.appendChild(nodoBotones);
    nodoTarea.draggable = true;

    nodoBotonBorrar.addEventListener ('click', () => {
        tareas.splice(tareas.indexOf(tarea), 1);
        tarea.contenidoHTML.parentNode.removeChild(nodoTarea);
        guardaTareasStorage();
    });

    nodoBotonCompletar.addEventListener('click', () => {
        tarea.modificaEstado();
        tarea.contenidoHTML.parentNode.removeChild(nodoTarea);
        pintaTarea(tarea);
        guardaTareasStorage();
    })

    return nodoTarea;
}

function devuelveDiasFaltantes (fecha) {
    let nueva = new Date (fecha);
    let hoy = new Date ();
    let resta = nueva.getTime() - hoy.getTime();
    return Math.round(resta/ (1000*60*60*24));
}

$(document).ready(function () {
    leeTareasStorage();
    pintaTareas();
});

$(document).on({
    keyup: function (evento) {
        if (evento.key === "Enter") {
            if ($('#entrada').val() !== "" && $('#fecha').val() !== "") {
                tramitaTarea($('#entrada').val(), $('#fecha').val());
            }
        }
    },

    dragstart: function (evento) {
        console.log(evento);
        objetoMovido = evento.target;
    },

    dragleave: function (evento) {
        evento.target.style.opacity = "";
    },

    dragover: function (evento) {
        evento.preventDefault();
        evento.target.style.opacity = "0.6";
    }
});

$('.caja__tareas').on({
    dragover: function (evento) {
        evento.preventDefault();
    },
    
    drop: function (evento) {
        evento.target.style.opacity = "";
        console.log(evento);
        let cajaTareas = this.lastElementChild;
        tareas.forEach(tarea => {
            if (tarea.contenidoHTML === objetoMovido) {
                if (cajaTareas.classList.contains('tareas__completadas') && 
                !objetoMovido.classList.contains('completado')){
                    objetoMovido.classList.add('completado');
                    tarea.modificaEstado();
                } else if (cajaTareas.classList.contains('tareas__pendientes') &&
                objetoMovido.classList.contains('completado')){
                    objetoMovido.classList.remove('completado');
                    tarea.modificaEstado();
                }
                tarea.contenidoHTML = objetoMovido;
                guardaTareasStorage();
            }
        });
        $(cajaTareas).append(objetoMovido);
    }
});

$('#enviar').on({
    click: function () {
        if ($('#entrada').val() !== "" && $('#fecha').val() !== "") {
            tramitaTarea($('#entrada').val(), $('#fecha').val());
        }
    }
});

$('#grid').on({
    click: function () {
        $('.tareas__pendientes').removeClass('flex');
        $('.tareas__completadas').removeClass('flex');
        $('.tareas__pendientes').addClass('grid');
        $('.tareas__completadas').addClass('grid');

        $('.tarea').each( function () {
            $(this).removeClass('tareaFlex');
            $(this).addClass('tareaGrid');
        });
    }
});

$('#flex').on({
    click: function () {
        $('.tareas__pendientes').removeClass('grid');
        $('.tareas__completadas').removeClass('grid');
        $('.tareas__pendientes').addClass('flex');
        $('.tareas__completadas').addClass('flex');

        $('.tarea').each( function () {
            $(this).removeClass('tareaGrid');
            $(this).addClass('tareaFlex');
        });
    }
});
