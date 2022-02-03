'use strict'

let nodoCurso = document.querySelector("#curso");

let nodoForm = document.querySelector("#form");

let nodoBoton = document.querySelector("#boton");

let alumno = {
    nombre: "María",
    apellidos: "González Pérez",
    anoNacimiento: 2000,
    calculaEdad: function () {
        let anoActual = new Date();
        anoActual = anoActual.getFullYear();
        console.log(anoActual);
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

function añadeAlumno (nombre, apellidos, ano) {
    let alumno = {
        nombre: nombre,
        apellidos: apellidos,
        anoNacimiento: ano,
        calculaEdad: function () {
            let anoActual = new Date();
            anoActual = anoActual.getFullYear();
            console.log(anoActual);
            return anoActual - this.anoNacimiento;
        }
    }
    return alumno;
}

nodoBoton.addEventListener ('click', function () {
    let nombre = nodoForm.querySelector("#nombre").value;
    let apellidos = nodoForm.querySelector("#apellidos").value;
    let ano = nodoForm.querySelector("#ano").value;
    let nuevoAlumno = añadeAlumno(nombre, apellidos, ano);
    pintaAlumno(nuevoAlumno);
});