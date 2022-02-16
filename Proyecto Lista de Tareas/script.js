'use strict'

let tareas = [];
let listaUsuarios;

let objetoMovido;

class ListaUsuarios {
    lista;
    usuarioActivo;

    constructor () {
        this.lista = [];
    }

    añadeUsuario (usuario) {
        this.lista.push(usuario);
    }

    actualizaUsuarioActivo (usuario) {
        this.usuarioActivo = usuario;
    }
}

class Usuario {
    nombre;
    apellido;
    tareas;

    constructor(nombre, apellido, tareas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.tareas = tareas;
    }

    actualizaTareas (tareas) {
        this.tareas = tareas;
    }
}

//localStorage.removeItem('tareas');
//localStorage.removeItem('usuarios');

class Tarea {
    nombre;
    persona;
    fecha;
    pendiente;
    contenidoHTML;

    constructor(nombre, persona, fecha, estado = true, contenidoHTML = "") {
        this.nombre = nombre;
        this.persona = persona;
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

    modificaNombre (nombre) {
        this.nombre = nombre;
    }

}

// Crea una tarea, la guarda y la pinta
function tramitaTarea (nombreTarea, persona, fecha) {
    let tarea = new Tarea (nombreTarea, persona, fecha);
    if (tareas === null) {
        tareas = [];
    }
    let contenidoTarea = construyeNodoTarea(tarea);
    tarea.modificaContenidoHTML(contenidoTarea);
    tareas.push(tarea);
    guardaTareasStorage();
    pintaTarea(tarea);
}

function guardaUsuariosStorage () {
    let usuario_json = JSON.stringify(listaUsuarios);
    localStorage.setItem('usuarios', usuario_json);
}

function guardaTareasStorage () {
    let tareas_json = JSON.stringify(tareas);
    localStorage.setItem('tareas', tareas_json);
}

function leeUsuariosStorage () {
    let usuariosStorage = JSON.parse(localStorage.getItem('usuarios'));
    listaUsuarios = new ListaUsuarios ();
    usuariosStorage.lista.forEach ( usuarioStorage => {
        let usuario = new Usuario (usuarioStorage.nombre, usuarioStorage.apellido, usuarioStorage.tareas);
        listaUsuarios.añadeUsuario(usuario);
    })
    listaUsuarios.actualizaUsuarioActivo(usuariosStorage.usuarioActivo);
    console.log(listaUsuarios);
}

//Lee todas las tareas del storage
function leeTareasStorage () {
    let tareasStorage = JSON.parse(localStorage.getItem('tareas'));
    tareasStorage.forEach( tareaStorage => {
        let tarea = new Tarea (tareaStorage.nombre, tareaStorage.persona, tareaStorage.fecha, tareaStorage.pendiente);
        let contenidoTarea = construyeNodoTarea(tarea);
        tarea.modificaContenidoHTML(contenidoTarea);
        tareas.push(tarea);
    });
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
    let nodoTarea = $('<div/>').addClass(['tarea', 'tareaFlex'])[0];
    console.log(nodoTarea);

    let nodoDatos = document.createElement('div');
    nodoDatos.classList.add('datos');

    let nodoNombre = document.createElement('span');
    nodoNombre.classList.add('nombre');
    nodoNombre.innerHTML = tarea.nombre;
    nodoDatos.appendChild(nodoNombre);

    let nodoPersona = document.createElement('span');
    nodoPersona.classList.add('persona');
    nodoPersona.innerHTML = tarea.persona;
    nodoDatos.appendChild(nodoPersona);
    nodoTarea.appendChild(nodoDatos);

    let nodoFecha = document.createElement('span');
    nodoFecha.classList.add('fecha');
    let dias = devuelveDiasFaltantes(tarea.fecha);
    if (dias <= 0) {
        dias = 0;
    }
    nodoFecha.innerHTML = `Faltan ${dias} días`;
    nodoTarea.appendChild(nodoFecha);

    let nodoBotones = document.createElement('div');
    nodoBotones.classList.add('botones');
    let nodoBotonEditar = document.createElement('span');
    let nodoBotonBorrar = document.createElement('span');
    let nodoBotonCompletar = document.createElement('span');
    let nodoBotonFavorito = document.createElement('span');
    nodoBotonEditar.classList.add('editar');
    nodoBotonBorrar.classList.add('borrar');
    nodoBotonCompletar.classList.add('completar');
    nodoBotonFavorito.classList.add('fav');
    nodoBotonEditar.innerHTML = '<i class="bi bi-pencil-square"></i>';
    nodoBotonBorrar.innerHTML = `<i class="bi bi-folder-x"></i>`;
    nodoBotonCompletar.innerHTML = `<i class="bi bi-check2-square"></i>`;
    nodoBotonFavorito.innerHTML = '<i class="bi bi-star"></i>';
    $(nodoBotones).append(nodoBotonEditar, nodoBotonBorrar, nodoBotonCompletar, nodoBotonFavorito);
    /*nodoBotones.appendChild(nodoBotonEditar);
    nodoBotones.appendChild(nodoBotonBorrar);
    nodoBotones.appendChild(nodoBotonCompletar);
    nodoBotones.appendChild(nodoBotonFavorito);*/

    nodoBotonEditar.addEventListener ('click', () => {
        $('#modal').css({
            display: 'flex'
        });
    });

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
    });

    nodoBotonFavorito.addEventListener ('click', () => {
        if (nodoTarea.classList.contains('favorito')) {
            nodoTarea.classList.remove('favorito');
        } else {
            nodoTarea.classList.add('favorito');
        }
        if (nodoTarea.style.backgroundColor === "tomato") {
            nodoTarea.style.backgroundColor = "";
        } else {
            nodoTarea.style.backgroundColor = "tomato";
        }
    });
    
    nodoTarea.appendChild(nodoBotones);
    nodoTarea.draggable = true;

    return nodoTarea;
}

function devuelveDiasFaltantes (fecha) {
    let nueva = new Date (fecha);
    let hoy = new Date ();
    let resta = nueva.getTime() - hoy.getTime();
    return Math.round(resta/ (1000*60*60*24));
}

$(document).ready(function () {
    //leeUsuariosStorage();
    leeTareasStorage();
    pintaTareas();
});

$(document).on({
    keyup: function (evento) {
        if (evento.key === "Enter") {
            if ($('#entrada').val() !== "" && $('#fecha').val() !== "") {
                tramitaTarea($('#entrada').val(), $('#persona').val(), $('#fecha').val());
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
            tramitaTarea($('#entrada').val(), $('#persona').val(), $('#fecha').val());
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
