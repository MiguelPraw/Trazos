'use strict'

let nodoJuego = document.querySelector("#juego");

class Juego {
    tablero;
    jugador1;
    jugador2;
    jugadorActivo;
    constructor(dimension, nombre1, nombre2){
        this.tablero = new Tablero(dimension);
        this.jugador1 = new Jugador(nombre1);
        this.jugador2 = new Jugador(nombre2);
        this.jugadorActivo = this.jugador1;
    }

    cambiaJugadorActivo() {
        if (this.jugadorActivo === this.jugador1) {
            this.jugadorActivo = this.jugador2;
        } else {
            this.jugadorActivo = this.jugador1;
        }
    }

    reiniciaTablero(dimension) {
        this.tablero = new Tablero(dimension);
    }
}

class Tablero {
    dimension;
    tablero;
    constructor(dimension){
        this.dimension = dimension;
        this.tablero = [];
        for (let i = 0; i < this.dimension; i++) {
            this.tablero[i] = [];
            for (let j = 0; j < this.dimension; j++) {
                this.tablero[i][j] = 0;
            }
        }
    }

    pintaTablero(){
        let nodoTablero = document.createElement('div');
        nodoTablero.classList.add('tablero');
        for (let i = 0; i < this.dimension; i++) {
            for (let j = 0; j < this.dimension; j++) {
                let nodoCasilla = document.createElement('div');
                nodoCasilla.classList.add('casilla');
                nodoTablero.append(nodoCasilla);
            }
        }
        return nodoTablero;
    }
}

class Jugador {
    nombre;
    ganadas;
    constructor(nombre){
        this.nombre = nombre;
        this.ganadas = 0;
    }

    ganaPartida() {
        this.ganadas++;
    }

    pintaJugador (){
        let nodoH1 = document.createElement('h1');
        nodoH1.classList.add('jugador');
        nodoH1.innerHTML = "Turno de " + this.nombre;
        return nodoH1;
    }
}

function calculoFila(juego, posicion){
    let dimension = juego.tablero.dimension;
    let fila = posicion / dimension;
    return Math.trunc(fila);
}

function calculoColumna (juego, posicion) {
    let dimension = juego.tablero.dimension;
    let columna = posicion % dimension;
    return columna;
}

function añadeConsola () {
    let nodoConsola = document.createElement('div');
    nodoConsola.classList.add('consola');
    let nodoH2 = document.createElement('h2');
    nodoConsola.append(nodoH2);
    nodoH2.innerHTML = "Tres en raya";
    return nodoConsola;
}

function actualizaEstadisticas (juego) {
    let nodoEstadisticas = document.querySelectorAll('.estadisticas');
    nodoEstadisticas[0].querySelector('.estadisticas__jugador').innerHTML = juego.jugador1.nombre;
    nodoEstadisticas[0].querySelector('.ganadas').innerHTML = juego.jugador1.ganadas;
    nodoEstadisticas[1].querySelector('.estadisticas__jugador').innerHTML = juego.jugador2.nombre;
    nodoEstadisticas[1].querySelector('.ganadas').innerHTML = juego.jugador2.ganadas;
}

function compruebaTresEnRaya (juego, fila, columna, variableAComparar) {
    return compruebaFilas(juego, fila, variableAComparar) || compruebaColumnas(juego, columna, variableAComparar);
}

function compruebaDiagonal (juego) {
    let encontrado = false;
    let i = 0;
    let j = 0;
    let nCasillas = 0;
    let variableAComparar;
    if (juego.jugadorActivo === juego.jugador1) {
        variableAComparar = 1;
    } else {
        variableAComparar = 2;
    }
    while (!encontrado && i < juego.tablero.dimension && j < juego.tablero.dimension) {
        
    }
}

function compruebaFilas (juego, fila, variableAComparar) {
    let encontrado = false;
    let i = 0;
    let nCasillas = 0;
    while (!encontrado && i < juego.tablero.dimension) {
        if (juego.tablero.tablero[fila][i] === variableAComparar) {
            nCasillas++;
        } else {
            nCasillas = 0;
        }
        if (nCasillas === 3) {
            encontrado = true;
        } else {
            i++;
        }
    }
    return encontrado;
}

function compruebaColumnas (juego, columna, variableAComparar) {
    let encontrado = false;
    let i = 0;
    let nCasillas = 0;
    while (!encontrado && i < juego.tablero.dimension) {
        if (juego.tablero.tablero[i][columna] === variableAComparar) {
            nCasillas++;
        } else {
            nCasillas = 0;
        }
        if (nCasillas === 3) {
            encontrado = true;
        } else {
            i++;
        }
    }
    return encontrado;
}

function reiniciaClases() {
    let nodoCasillas = nodoJuego.querySelectorAll('.casilla');
    for(let i = 0; i < nodoCasillas.length; i++) {
        nodoCasillas[i].classList.remove('activo1');
        nodoCasillas[i].classList.remove('activo2');
    }
}

function reiniciaJuego (juego) {
    juego.reiniciaTablero(4);
    juego.jugadorActivo = juego.jugador1;
    reiniciaClases();
    actualizaEstadisticas(juego);
}

function inicializaJuego (juego) {
    let nodoJugador = juego.jugadorActivo.pintaJugador();
    let nodoTablero = juego.tablero.pintaTablero();
    let nodoConsola = añadeConsola();
    actualizaEstadisticas(juego);
    nodoTablero.style.setProperty('grid-template-columns', `repeat(${juego.tablero.dimension}, 1fr)`);
    nodoJuego.append(nodoJugador);
    nodoJuego.append(nodoTablero);
    nodoJuego.append(nodoConsola);
}

function logicaJuego(juego, i, variableAComparar, nodoH2){
    juego.tablero.tablero[calculoFila(juego, i)][calculoColumna(juego, i)] = variableAComparar;
    if (compruebaTresEnRaya(juego, calculoFila(juego, i), calculoColumna(juego, i), variableAComparar)) {
        nodoH2.innerHTML = "Ganaste " + juego.jugadorActivo.nombre;
        juego.jugador1.ganaPartida();
        reiniciaJuego(juego);
    } else {
        nodoH2.innerHTML = "Tres en raya";
    }
    juego.cambiaJugadorActivo();
}

function juego () {

    let juego = new Juego (4, "Jugador 1", "Jugador 2");
    inicializaJuego(juego);

    let nodoConsola = nodoJuego.querySelector('.consola');
    let nodoJugador = nodoJuego.querySelector('.jugador');
    let nodoH2 = nodoConsola.querySelector('h2');
    
    let nodoCasillas = nodoJuego.querySelectorAll('.casilla');
    for(let i = 0; i < nodoCasillas.length; i++) {
    
        nodoCasillas[i].addEventListener('click', function (){
            if (juego.tablero.tablero[calculoFila(juego, i)][calculoColumna(juego, i)] !== 0) {
                nodoH2.innerHTML = "Ya está seleccionada";
            } else {
                if (juego.jugadorActivo === juego.jugador1) {
                    nodoCasillas[i].classList.add('activo1');
                    logicaJuego(juego, i, 1, nodoH2);
                } else {
                    nodoCasillas[i].classList.add('activo2');
                    logicaJuego(juego, i, 2, nodoH2);
                }
            }
            nodoJugador.innerHTML = "Turno de " + juego.jugadorActivo.nombre;
        });
    }
}

juego();
