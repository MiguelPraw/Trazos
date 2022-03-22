"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.clear();
/* Primitivos */
let numero = 1;
let nombre = "hola";
let meQuiere = true;
let yoQueSe;
/* Array */
let edades1 = [23, 233, 25, 45, 55];
let edades2 = [23, 233, 25, 45, 55];
let nombres1 = ['Timmy', 'Emma'];
let nombres2 = ['Timmy', 'Emma'];
let likes1 = [true, true, false];
let likes2 = [false, false, true];
/* Funciones */
/* Parámetros */
function saludo1(nombre) { }
function saludo1a(nombre, apellido) { }
let saludo1b = function (nombre) { };
let saludo1c = function (nombre, apellido) { };
let saludo1d = (nombre) => { };
let saludo1e = (nombre, apellido) => { };
/* Parámetros y return */
function saludo2(nombre) { }
function saludo2a(nombre) { return "hola"; }
let saludo2b = function (nombre) { };
let saludo2c = function (nombre) { return "hola"; };
let saludo2d = (nombre) => { };
let saludo2e = (nombre) => { return "hola"; };
function Decorador() {
    console.log("Ejecutando decorador");
}
let alumno = { nombre: 'Timmy', apellido: 'Anderson', edad: 32, saludo: () => { } };
let clase = [
    { nombre: 'Timmy', apellido: 'Anderson', edad: 32 },
    { nombre: 'Timmy', apellido: 'Anderson' },
    { nombre: 'Timmy', apellido: 'Anderson', edad: 32 },
    { nombre: 'Timmy', apellido: 'Anderson', edad: 32 }
];
//@Decorador()
class Alumno {
    constructor() {
        this.nombre = 'Timmy';
        this.apellido = 'Anderson';
    }
}
let persona = new Alumno();
