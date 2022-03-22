console.clear();

const saludo1 = ( nombre ) => {
    console.log(`Hola, soy ${ nombre }`);
}
saludo1('Darth Vader');

const saludo2 = ( nombre ) => {
    console.log(`Hola, soy ${ nombre }`);
}
saludo2('Anakin Skywalker');

const saludo3 = ( nombre ) => {
    console.log(`Hola, soy ${ nombre }`);
}
saludo3('Obi Wan Kenobi');

const saludo4 = ( nombre ) => {
    console.log(`Hola, soy ${ nombre }`);
}
saludo4('Palpatine');

const saludo5 = ( nombre ) => {
    console.log(`Hola, soy ${ nombre }`);
}
saludo5('Yoda');

const saludo6 = nombre => console.log(`Hola, soy ${ nombre }`);
saludo6('Darth Maul');

console.clear();

const persona1 = {
    nombre  : 'Timmy',
    apellido : 'Anderson'
};
const saludo11 = ( { nombre , apellido } ) => {
    console.log(`Hola, me llamo ${ nombre } ${ apellido }`);
}
saludo11( persona1 );

const persona2 = { nombre : "Bilbo" , apellido : "Bolson" };
const saludo12 = ( { nombre , apellido } ) => {
    console.log(`Hola, me llamo ${ nombre } ${ apellido }`);
}
saludo12( persona2 );

const persona3 = { nombre : "Frodo" , apellido : "Bolson" };
const saludo13 = ( { nombre , apellido } ) => {
    console.log(`Hola, soy ${ nombre } ${ apellido }`);
}
saludo13( persona3 );

const persona4 = { nombre : "Sam" , apellido : "Gamyi" };
const saludo14 = ( { nombre , apellido } ) => {
    console.log(`Hola, soy ${ nombre } ${ apellido }`);
}
saludo14( persona4 );

const persona5 = { nombre : "Meriadoc" , apellido : "Brandigamo" };
const saludo15 = ( { nombre , apellido } ) => {
    console.log(`Hola, soy ${ nombre } ${ apellido }`);
}
saludo15( persona5 );

const persona6 = { nombre : "Peregrin" , apellido : "Tuk" };
const saludo16 = ( { nombre , apellido} ) => {
    console.log(`Hola, soy ${ nombre } ${ apellido }`);
}
saludo16( persona6 );
