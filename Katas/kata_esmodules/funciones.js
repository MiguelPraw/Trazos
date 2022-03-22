
/* CommonJS */

let saludo1 = () => {
    console.log('Hola');
}
let saludo2 = () => {
    console.log('Hola2');
}
let saludo3 = () => {
    console.log('Hola3');
}

class Alumno {
    nombre = 'Timmy';
    apellido = 'Anderson';

    constructor(){
        this.nombre = 'Pep';
        this.apellido = 'Guardiola';
    }
}

//module.exports = saludo1;

// module.exports = {
//     saludo2,
//     saludo3,
//     Alumno
// };


/* ES Modules */

export let saludoES1 = () => {
    console.log('Holi');
}

export let saludoES2 = () => {
    console.log('Holi2');
}

/* 1 elemento */
//export default saludoES;