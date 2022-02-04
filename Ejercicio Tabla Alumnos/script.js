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
let cursoActual = "Todos";
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
    return nodoTr;
}

function borraTabla () {
    let nodoTBody = nodoTabla.querySelector('tbody');
    let nodoTr = nodoTBody.querySelectorAll('tr');
    nodoTr.forEach(nodo => {
        nodoTBody.removeChild(nodo);
    });
}

function computaTablaActual () {
    let nodoTr = nodoTabla.querySelector('tbody').querySelectorAll('tr');
    console.log(nodoTr);
    console.log(listaAlumnosActual);
    nodoTr.forEach(nodo => {
        console.log(nodo);
    });
}

function filtraPorNombre () {
    borraTabla();
    let nombreBuscado = nodoInputBusqueda.value;
    if (nombreBuscado === "") {
        listaAlumnosActual = alumnos;
    } else {
        let pattern = new RegExp("(" + nombreBuscado + "){1,}", 'gi');
        let listaAux = [];
        listaAlumnosActual.forEach( alumno => {
            if (alumno.nombre.match(pattern)) {
                listaAux.push(alumno);
            }
        });
        listaAlumnosActual = listaAux;
    }
    pintaAlumnos(listaAlumnosActual);
}

nodoInputBusqueda.addEventListener ('keyup', () => {
    filtraPorNombre();
});

nodoInputFecha.addEventListener ('input', () => {
    console.log(nodoInputFecha.value);
})

nodoInputSelect.addEventListener ('input', () => {
    borraTabla();
    cursoActual = nodoInputSelect.value;
    if (cursoActual === "Todos") { 
        listaAlumnosActual = alumnos;
    } else {
        let listaAux = [];
        listaAlumnosActual.forEach( alumno => {
            if (alumno.curso === cursoActual) {
                listaAux.push(alumno);
            }
        });
        listaAlumnosActual = listaAux;
    }
    pintaAlumnos(listaAlumnosActual);
});

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
    computaTablaActual();
})

function imprimeNumeroAlumnos () {
    let nodoNAlumnos = document.querySelector('#nAlumnos');
    nodoNAlumnos.innerHTML = listaAlumnosActual.length;
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
    nodoNotaMedia.innerHTML = calculaNotaMedia();
}

pintaAlumnos(listaAlumnosActual);