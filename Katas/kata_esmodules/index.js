console.clear();

/* CommonJS */
// const saludo1 = require('./funciones.js');

// const { saludo2 : perro, saludo3, Alumno } = require('./funciones.js');

// let alumno = new Alumno();

// perro();
// saludo3();


/* ES Modules */

// import saludoES from './funciones.js'

import { saludoES1, saludoES2 as perro } from './funciones.js';

saludoES1();
perro();

