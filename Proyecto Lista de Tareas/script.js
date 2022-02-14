'use strict'

let tareas = [];

//localStorage.removeItem('tareas');

class Tarea {
    nombre;
    pendiente;
    contenidoHTML;

    constructor(nombre, estado = true, contenidoHTML = "") {
        this.nombre = nombre;
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
function tramitaTarea (nombreTarea) {
    let tarea = new Tarea (nombreTarea);
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
        let tarea = new Tarea (tareaStorage.nombre, tareaStorage.pendiente);
        let contenidoTarea = construyeNodoTarea(tarea);
        tarea.modificaContenidoHTML(contenidoTarea);
        tareas.push(tarea);
    })
}

function pintaTarea(tarea) {
    if (tarea.pendiente) {
        $('.tareas__pendientes').append(tarea.contenidoHTML);
    } else {
        $('.tareas__completadas').append(tarea.contenidoHTML);
    }
}

//Pinta todas las tareas del array
function pintaTareas() {
    tareas.forEach( tarea => {
        pintaTarea(tarea);
    });
}

function construyeNodoTarea (tarea) {
    let nodoTarea = document.createElement('div');
    nodoTarea.classList.add('tarea');

    let nodoNombre = document.createElement('span');
    nodoNombre.innerHTML = tarea.nombre;
    nodoTarea.appendChild(nodoNombre);

    let nodoBotones = document.createElement('div');
    nodoBotones.classList.add('botones');
    let nodoBotonBorrar = document.createElement('span');
    let nodoBotonCompletar = document.createElement('span');
    nodoBotonBorrar.classList.add('borrar');
    nodoBotonCompletar.classList.add('completar');
    nodoBotonBorrar.innerHTML = `<i class="bi bi-folder-x"></i>`;
    nodoBotonCompletar.innerHTML = `<i class="bi bi-check2-square"></i>`;

    nodoBotones.appendChild(nodoBotonBorrar);
    nodoBotones.appendChild(nodoBotonCompletar);
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

/*

Completar tarea => {
    cambiar el estado de la tarea
    eliminar de por hacer, añadir en completadas
    pintar en completadas (Borrar/Crear - Mover)
    actualizar el localStorage
}

Eliminar tarea => {
    elimino la tarea del array
    borrar el div
    actualizar LocalStorage
}

*/

$(document).ready(function () {
    leeTareasStorage();
    pintaTareas();
});

$(document).on({
    keyup: function (evento) {
        if (evento.key === "Enter") {
            if ($('#entrada').val() !== "") {
                tramitaTarea($('#entrada').val());
            }
        }
    }
});

$('#enviar').on({
    click: function () {
        if ($('#entrada').val() !== "") {
            tramitaTarea($('#entrada').val());
        }
    }
});

$('.tarea').on({
    dragstart: function (evento){
        console.log("hola")
        console.log(evento.dataTransfer);
    }

});
