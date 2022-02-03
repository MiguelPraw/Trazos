console.log('Hola mundo JS');

console.log( 'Segundo console' );

// ¿QUE queremos hacer?

//cuando clico en el boton animar añado la clase al elemento E

//Evento de click

function animaColumna(){
    
    console.log('Haciendo click');
    
    // Añadir una clase
    // Seleccionar el candidato
    let nodoE = document.querySelector('#elementoE');
    console.log (nodoE);


    // MODIFICAR propiedades
    nodoE.classList.add('animateMove');

    

}

function resetAnimacion(){

    let nodoE = document.querySelector('#elementoE');

    nodoE.classList.remove('animateMove');

}