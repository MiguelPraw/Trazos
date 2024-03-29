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

let listaAlumnosActual = alumnos;
let estadoNotas = "ascendente";

let nodoTabla = document.querySelector('#tabla');

let nodoInputBusqueda = document.querySelector('#busqueda');
let nodoInputFecha = document.querySelector('#fecha');
let nodoInputSelect = document.querySelector('#select');
let nodoNota = document.querySelector('#nota');

function pintaAlumnos (listaAlumnos) {
    let nodoTBody = nodoTabla.querySelector('#cuerpo');
    listaAlumnos.forEach( alumno => {
        let nodoTr = pintaAlumno(alumno);
        nodoTBody.appendChild(nodoTr);
    });
    imprimeNumeroAlumnos();
    imprimeNotaMedia();
}

function pintaAlumno (alumno) {
    let nodoTr = document.createElement('tr');
    let elementosAlumno = Object.values(alumno);
    elementosAlumno.forEach( (cadaElemento) => {
        let nodoTd = document.createElement('td');
        nodoTd.innerHTML = cadaElemento;
        nodoTr.appendChild(nodoTd);
    });
    nodoCerrar = document.createElement('td');
    nodoCerrar.classList.add('cerrar');
    nodoCerrar.innerHTML = '✖';
    nodoTr.appendChild(nodoCerrar);

    nodoCerrar.addEventListener('click', () => {
        let nodoTBody = nodoTabla.querySelector('tbody');
        nodoTBody.removeChild(nodoTr);
    });

    return nodoTr;
}

function borraTabla () {
    let nodoTBody = nodoTabla.querySelector('tbody');
    let nodoTr = nodoTBody.querySelectorAll('tr');
    nodoTr.forEach(nodo => {
        nodoTBody.removeChild(nodo);
    });
}

function devuelveListaPorNombre (listaActual) {
    let nombreBuscado = nodoInputBusqueda.value;
    let listaAux = [];
    if (nombreBuscado === "") {
        listaAux = alumnos;
    } else {
        let pattern = new RegExp("(^" + nombreBuscado + "){1,}", 'gi');
        alumnos.forEach( alumno => {
            if (alumno.nombre.match(pattern)) {
                listaAux.push(alumno);
            }
        });
    }
    return listaAux;
}

function devuelveListaPorCurso (listaActual) {
    let curso = nodoInputSelect.value;
    let listaAux = [];
    if (curso === "Todos") {
        listaAux = alumnos;
    } else {
        listaActual.forEach( alumno => {
            if (alumno.curso === curso) {
                listaAux.push(alumno);
            }
        });
    }
    return listaAux;
}

function devuelveListaPorFecha () {
    let cadena = nodoInputFecha.value.split('-');
    let listaAux = [];
    if (cadena[0].match(/^[1-9]/gi)) {
        alumnos.forEach( alumno => {
            if (cadena[0].includes(alumno.fecha.split('/')[2]) && cadena[1].includes(alumno.fecha.split('/')[1])) {
                listaAux.push(alumno);
            }
        });
    } else {
        listaAux = alumnos;
    }
    return listaAux;
}

function devuelveListaFiltrada (listaActual) {
    let curso = nodoInputSelect.value;
    let nombreBuscado = nodoInputBusqueda.value;
    let listaAux = [];

    if (nombreBuscado === "") {
        listaAux = devuelveListaPorCurso(listaActual);
    } else if (curso === "Todos") {
        listaAux = devuelveListaPorNombre(listaActual);
    } else if (nombreBuscado !== "") {
        let pattern = new RegExp("(^" + nombreBuscado + "){1,}", 'gi');
        alumnos.forEach( alumno => {
            if (alumno.nombre.match(pattern) && alumno.curso === curso) {
                listaAux.push(alumno);
            }
        });
    }
    return listaAux;
}

function filtra () {
    borraTabla();
    listaAlumnosActual = devuelveListaFiltrada(listaAlumnosActual);
    pintaAlumnos(listaAlumnosActual);
}

function ordenaNotasMayorAMenor (array) {
    return array.sort( (a, b) => {
        if (a.nota > b.nota) {
            return -1;
        } else if (a.nota === b.nota) {
            return 0;
        } {
            return 1;
        }
    });
}

function ordenaNotasMenorAMayor (array) {
    return array.sort( (a, b) => {
        if (a.nota < b.nota) {
            return -1;
        } else if (a.nota === b.nota) {
            return 0;
        } {
            return 1;
        }
    });
}

function imprimeNumeroAlumnos () {
    let nodoNAlumnos = document.querySelector('#nAlumnos');
    if (listaAlumnosActual.lenght === "NaN") {
        nodoNAlumnos.innerHTML = 0;
    } else {
        nodoNAlumnos.innerHTML = listaAlumnosActual.length;
    }
}

function calculaNotaMedia () {
    let suma = 0;
    listaAlumnosActual.forEach(alumno => {
        suma = suma + alumno.nota;
    });
    media = suma / listaAlumnosActual.length;
    return media.toFixed(2);
}

function imprimeNotaMedia () {
    let nodoNotaMedia = document.querySelector('#notaMedia');
    let media = calculaNotaMedia();
    if (media === "NaN") {
        nodoNotaMedia.innerHTML = 0;
    } else {
        nodoNotaMedia.innerHTML = media;
    }
}

nodoNota.addEventListener ('click', () => {
    if (estadoNotas === "ascendente") {
        listaAlumnosActual = ordenaNotasMayorAMenor(listaAlumnosActual);
        estadoNotas = "descendente";
    } else {
        listaAlumnosActual = ordenaNotasMenorAMayor(listaAlumnosActual);
        estadoNotas = "ascendente";
    }
    borraTabla();
    pintaAlumnos(listaAlumnosActual);
});

nodoInputBusqueda.addEventListener ('keyup', () => {
    cambio = "nombre";
    filtra();
});

nodoInputSelect.addEventListener ('input', () => {
    cambio = "curso";
    filtra();
});

nodoInputFecha.addEventListener ('input', () => {
    let cadena = nodoInputFecha.value.split('-');
    if (cadena[0].match(/^[1-9]/gi)) {
        cambio = "fecha";
        filtra();
    }
});

pintaAlumnos(listaAlumnosActual);