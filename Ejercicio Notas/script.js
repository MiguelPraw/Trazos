'use strict'

let nodoCurso = document.querySelector("#curso");

let asignatura = {
    nombre: "Álgebra",
    fechaInicio: "17/01/2022",
    numeroAlumnos: 0,
    profesor: "",
    listaAlumnos: [],
    asignaProfesor: function (profesor) {
        this.profesor = profesor;
    },
    asignaAlumno: function (alumno) {
        this.listaAlumnos.push(alumno);
        this.numeroAlumnos++;
    }
};

let profesor = {
    nombre: "",
    apellidos: "",
    dni: 0,
    anoNacimiento: 0,
    calculaEdad: function () {
        let anoActual = new Date().getFullYear;
        return anoActual - this.anoNacimiento;
    },
    creaProfesor: function (nombre, apellidos, dni, anoNacimiento) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.dni = dni;
        this.anoNacimiento = anoNacimiento;
    }

};

let alumno1 = {
    nombre: "Victor",
    apellidos: "Sanchez",
    anoNacimiento: 2000,
    calculaEdad: function () {
        let anoActual = new Date();
        anoActual = anoActual.getFullYear();
        console.log(anoActual);
        return anoActual - this.anoNacimiento;
    },
    nota: 5
};

let alumno2 = {
    nombre: "Pepe",
    apellidos: "Rodriguez",
    anoNacimiento: 1992,
    calculaEdad: function () {
        let anoActual = new Date();
        anoActual = anoActual.getFullYear();
        console.log(anoActual);
        return anoActual - this.anoNacimiento;
    },
    nota: 9
};

let alumno3 = {
    nombre: "Carlos",
    apellidos: "Garcia",
    anoNacimiento: 1996,
    calculaEdad: function () {
        let anoActual = new Date();
        anoActual = anoActual.getFullYear();
        console.log(anoActual);
        return anoActual - this.anoNacimiento;
    },
    nota: 6
};

function asignarAlumnado () {

    asignatura.asignaAlumno(alumno1);
    asignatura.asignaAlumno(alumno2);
    asignatura.asignaAlumno(alumno3);
}

function asignarProfesorado () {

    let profesor1 = new profesor.creaProfesor("Juan", "Alvarez", "12345678R", 1965);
    asignatura.asignaProfesor(profesor1);
}

function cargaAsignatura () {
    asignarProfesorado();
    asignarAlumnado();
}

function devuelveCadenaAlumnos () {
    let str = ``;
    for (let i = 0; i < asignatura.listaAlumnos.length; i++) {
        str += `
        <div class='datosAlumnos'>
            <span> 
                ${asignatura.listaAlumnos[i].nombre} ${asignatura.listaAlumnos[i].apellidos} 
            </span>
            <span>    
                ${asignatura.listaAlumnos[i].calculaEdad()} años
            </span>
            <span>    
                Nota: ${asignatura.listaAlumnos[i].nota}
            </span>
        </div>`;
    }
    return str;
}

function pintaAsignatura() {
    
    let str = `
    <h1>${asignatura.nombre}</h1>
    <div class='datos'>
    <div class='profesor'>
    <span> Profesor:</span> <span>${asignatura.profesor.nombre} ${asignatura.profesor.apellidos} </span>
    </div>
    <div class='alumnos'>
    <span> Alumnos: </span>
    <div class='nombresAlumnos'> 
    ${devuelveCadenaAlumnos()} 
    </div>
    </div>
    </div>
    `;
    
    nodoCurso.innerHTML = str;
}

cargaAsignatura();
pintaAsignatura();

console.log(asignatura);
