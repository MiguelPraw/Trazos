
console.clear();

/* Primitivos */

let numero : number = 1;
let nombre : string = "hola";
let meQuiere : boolean = true;
let yoQueSe : any;


/* Array */

let edades1 : number[] = [23, 233, 25, 45, 55];
let edades2 : Array<number> = [23, 233, 25, 45, 55];

let nombres1 : String[] = ['Timmy', 'Emma'];
let nombres2 : Array<string> = ['Timmy', 'Emma'];

let likes1 : Boolean[] = [true, true, false];
let likes2 : Array<boolean> = [false, false, true];

/* Funciones */

/* Parámetros */

function saludo1 ( nombre : String) {}
function saludo1a ( nombre : string , apellido : string ) {}

let saludo1b = function ( nombre : string ) {}
let saludo1c = function ( nombre : string , apellido : string ) {}

let saludo1d = ( nombre : string ) => {}
let saludo1e = ( nombre : string , apellido : string ) => {}

/* Parámetros y return */

function saludo2 ( nombre : string ) : void {}
function saludo2a ( nombre : string ) : string { return "hola" }

let saludo2b = function ( nombre : string ) : void {}
let saludo2c = function ( nombre : string ) : string { return "hola" }

let saludo2d = ( nombre : string ) : void => {}
let saludo2e = ( nombre : string ) : string => { return "hola" }

/* ObjetoJS + Interface */

import Estudiante from "./interfaces";

function Decorador() : void {
    console.log("Ejecutando decorador");
}

let alumno : Estudiante = { nombre : 'Timmy' , apellido : 'Anderson', edad : 32, saludo : () => {} };

let clase : Array<Estudiante> = [
    { nombre : 'Timmy' , apellido : 'Anderson', edad : 32 },
    { nombre : 'Timmy' , apellido : 'Anderson' },
    { nombre : 'Timmy' , apellido : 'Anderson', edad : 32 },
    { nombre : 'Timmy' , apellido : 'Anderson', edad : 32 }
];

//@Decorador()
class Alumno implements Estudiante {
    nombre      = 'Timmy';
    apellido    = 'Anderson';
}

let persona = new Alumno ();

