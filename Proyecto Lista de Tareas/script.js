'use strict'

let tareas = [];

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
    nodoFecha.innerHTML = tarea.fecha;
    nodoTarea.appendChild(nodoFecha);

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

$(document).ready(function () {
    leeTareasStorage();
    pintaTareas();
});

$(document).on({
    keyup: function (evento) {
        if (evento.key === "j" && $('#fecha').val() !== "") {
            let fecha = $('#fecha').val();
            console.log(fecha);
            let nueva = new Date (fecha);
            let dia = nueva.getDate();
            let mes = nueva.getMonth();
            let año = nueva.getFullYear();
            console.log(nueva);
            console.log("dia", dia);
            console.log("mes", mes);
            console.log("año", año);

        }
        if (evento.key === "Enter") {
            if ($('#entrada').val() !== "" && $('#fecha').val() !== "") {
                tramitaTarea($('#entrada').val(), $('#fecha').val());
            }
        }
    },

    dragstart: function (evento) {
        console.log(evento.target);
    },

    dragleave: function (evento) {
        evento.target.style.opacity = "";
    },

    dragover: function (evento) {
        evento.target.style.opacity = "0.4";
    }
});

$('#enviar').on({
    click: function () {
        if ($('#entrada').val() !== "" && $('#fecha').val() !== "") {
            tramitaTarea($('#entrada').val(), $('#fecha').val());
        }
    }
});

$('.tarea').on({
    dragstart: function (evento){
        
    }
});

$('.tareas__pendientes').on({
    drop: function (evento) {
        evento.preventDefault();
        console.log(evento);
    },

    dragover: function (evento) {
        evento.preventDefault();
    }
});

$('.tareas__completadas').on({
    drop: function (evento) {
        console.log(evento);
        evento.preventDefault();
    },

    dragover: function (evento) {
        evento.preventDefault();
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
