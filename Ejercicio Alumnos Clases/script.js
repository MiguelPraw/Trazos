'use strict'

let nodoCurso = document.querySelector("#curso");
let nodoProfesor = document.querySelector("#profesor");

let nodoForm = document.querySelector("#form");

let nodoBoton = document.querySelector("#boton");

class Asignatura {
    nombre;
    fechaInicio;
    numeroAlumnos;
    profesor;
    listaAlumnos;

    constructor(nombre, fechaInicio) {
        this.nombre = nombre;
        this.fechaInicio = fechaInicio;
        this.numeroAlumnos = 0;
        this.listaAlumnos = [];
    }

    asignaProfesor (profesor) {
        this.profesor = profesor;
    }
    
    asignaAlumno(alumno) {
        this.listaAlumnos.push(alumno);
        this.numeroAlumnos++;
    }

    pintaAlumnos() {
        for (let i = 0; i < this.listaAlumnos.length; i++) {
            pintaAlumno(this.listaAlumnos[i]);
        }
    }
}

class Profesor {
    nombre;
    apellidos;
    anoNacimiento;
    constructor (nombre, apellidos, anoNacimiento) {

    }
}

class Alumno {
    nombre;
    apellidos;
    anoNacimiento;
    constructor(nombre, apellidos, anoNacimiento) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.anoNacimiento = anoNacimiento;
    }
    calculaEdad() {
        let anoActual = new Date();
        anoActual = anoActual.getFullYear();
        return anoActual - this.anoNacimiento;
    }
}

function pintaAlumno (alumno){
    let nodoAlumno = document.createElement('div');
    let nodoH3 = document.createElement('h3');
    let nodoSpan1 = document.createElement('span');
    let nodoSpan2 = document.createElement('span');
    nodoAlumno.classList.add('alumno');
    nodoSpan1.classList.add('textoEdad');
    nodoSpan2.classList.add('edad');
    nodoCurso.appendChild(nodoAlumno);
    nodoAlumno.appendChild(nodoH3);
    nodoAlumno.appendChild(nodoSpan1);
    nodoAlumno.appendChild(nodoSpan2);
    
    nodoH3.innerHTML = alumno.nombre + " " + alumno.apellidos;
    nodoSpan1.innerHTML = "Edad";
    nodoSpan2.innerHTML = alumno.calculaEdad() + " años";
}



let alumno = new Alumno("María", "González Pérez", 1999);
let profesor = new Profesor("José", "Fernández López", 1975);
pintaAlumno(alumno);

nodoBoton.addEventListener ('click', function () {
    let nombre = nodoForm.querySelector("#nombre").value;
    let apellidos = nodoForm.querySelector("#apellidos").value;
    let ano = nodoForm.querySelector("#ano").value;
    let nuevoAlumno = new Alumno(nombre, apellidos, ano);
    pintaAlumno(nuevoAlumno);
});