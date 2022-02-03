
let nodoModal = document.querySelector(".modal");
let nodoContenido = document.querySelector(".modal-content");

let nodoBoton = document.querySelector("#boton");

let nodoCerrar = document.querySelector(".close");

nodoBoton.addEventListener ( 'click' , function () {

    nodoModal.classList.add("activo");
});

nodoCerrar.addEventListener ( 'click' , function() {
    nodoModal.classList.remove("activo");
});

nodoModal.addEventListener ('click', function(evento) {
    evento.stopPropagation();
    if (evento.target === nodoModal) {
        nodoModal.classList.remove("activo");
    }
    
});