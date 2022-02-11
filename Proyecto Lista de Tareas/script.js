'use strict'

let tareas = [];

function tramitaTarea (nombreTarea) {
    let tarea = {
        nombre: nombreTarea,
        pendiente: true
    };
    tareas.push(tarea);
    guardaTareasStorage();
}

function guardaTareasStorage () {
    let tareas_json = JSON.stringify(tareas);
    localStorage.setItem('tareas', tareas_json);
}

function leeTareasStorage () {
    tareas = JSON.parse(localStorage.getItem('tareas'));
}

function pintaTareas() {
    tareas.forEach( tarea => {
        let nodoTarea = pintaTarea (tarea);
        if (tarea.pendiente) {
            $('.tareas__pendientes').append(nodoTarea);
        } else {
            $('.tareas__completadas').append(nodoTarea);
        }
    });
}

function pintaTarea (tarea) {
    let nodoTarea = document.createElement('div');
    nodoTarea.classList.add('tarea');

    let nodoNombre = document.createElement('span');
    nodoNombre.innerHTML = tarea.nombre;
    nodoTarea.appendChild(nodoNombre);

    let nodoBotones = document.createElement('div');
    nodoBotones.classList.add('botones');
    let nodoBotonBorrar = document.createElement('span');
    let nodoBotonCompletar = document.createElement('span');
    nodoBotonBorrar.innerHTML = `&#128465`;
    nodoBotonCompletar.innerHTML = `&#10003;`;
    nodoBotones.appendChild(nodoBotonBorrar);
    nodoBotones.appendChild(nodoBotonCompletar);

    return nodoTarea;
}

$(document).ready(function () {
    leeTareasStorage();
    //pintaTareas();
});

$(document).on({
    keyup: function (evento) {
        console.log(evento.key);
        if (evento.key === "Enter") {
            console.log($('#entrada').val());
            if ($('#entrada').val() === "") {
                console.log("lol");
            }
        }
    }
});

$('#enviar').on({
    click: function () {
        console.log($('#entrada').val());
        if ($('#entrada').val() === "") {
            console.log("lol");
        }
    }
});
