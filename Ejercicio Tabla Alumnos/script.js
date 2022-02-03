const alumnos = [
    {
        nombre:"Carlos",
        apellido:"Gómez",
        fecha:"10/10/1994",
        nota: 9.5,
        curso: "JS"
    },
    {
        nombre:"María",
        apellido:"Gómez",
        fecha:"10/11/1994",
        nota: 8.5,
        curso:"JS"
    },
    {
        nombre:"Álvaro",
        apellido:"Ruiz",
        fecha:"21/01/2004",
        nota: 6.5,
        curso:"HTML"
    },
    {
        nombre:"Marta",
        apellido:"Jiménez",
        fecha:"10/11/1994",
        nota: 7.5,
        curso:"JS"
    },
    {
        nombre:"María",
        apellido:"Gómez",
        fecha:"10/11/1994",
        nota: 10,
        curso:"HTML"
    },
    {
        nombre:"Fernando",
        apellido:"Hernández",
        fecha:"10/11/1994",
        nota: 8.5,
        curso:"HTML"
    },
    {
        nombre:"Elena",
        apellido:"Herranz",
        fecha:"22/12/1992",
        nota: 8.5,
        curso:"JS"
    },
    {
        nombre:"Juan Carlos",
        apellido:"Herranz",
        fecha:"22/05/1993",
        nota: 8.5,
        curso:"JS"
    }
];

let nodoTabla = document.querySelector('#tabla');

let nodoInputBusqueda = document.querySelector('#busqueda');

function pintaAlumnos (listaAlumnos) {
    let nodoTBody = nodoTabla.querySelector('#cuerpo');
    let nodoTr;
    listaAlumnos.forEach( alumno => {
        nodoTr = pintaAlumno(alumno);
        nodoTBody.appendChild(nodoTr);
    });
}

function pintaAlumno (alumno) {
    let nodoTr = document.createElement('tr');
    let elementosAlumno = Object.values(alumno);
    elementosAlumno.forEach( (cadaElemento) => {
        let nodoTd = document.createElement('td');
        nodoTd.innerHTML = cadaElemento;
        nodoTr.appendChild(nodoTd);
    });
    return nodoTr;
}

function buscaEnCadena (cadena, buscado) {
    if (cadena.includes(buscado)){
        return true;
    }
    return false;
}

nodoInputBusqueda.addEventListener ('keyup', () => {
    let nodoTBody = nodoTabla.querySelector('tbody');
    let nodoTr = nodoTBody.querySelectorAll('tr');
    nodoTr.forEach(nodo => {
        nodoTBody.removeChild(nodo);
    });
    let nombreBuscado = nodoInputBusqueda.value;
    let alumnosNuevo = [];
    alumnos.forEach( alumno => {
        if (alumno.nombre.includes(nombreBuscado)) {
            alumnosNuevo.push(alumno);
        }
    });
    pintaAlumnos(alumnosNuevo);
});

function pintaAlumnos2 (nodoTr){

}

pintaAlumnos(alumnos);