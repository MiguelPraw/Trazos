
let nodoBotonTodas = document.querySelector("#botonTodas");
let nodoBotonFuego = document.querySelector("#botonFuego");
let nodoBotonAgua = document.querySelector("#botonAgua");
let nodoBotonTierra = document.querySelector("#botonTierra");

let nodoGrid = document.querySelector("#grid");
let nodoImagenes = nodoGrid.querySelectorAll(".grid__img");

nodoBotonTodas.addEventListener ('click', function() {
    for (let i = 0; i < nodoImagenes.length; i++) {
        if(nodoImagenes[i].classList.contains('desactivar')) {
            nodoImagenes[i].classList.remove('desactivar');
        }
    }
});

nodoBotonFuego.addEventListener ('click', function() {
    for (let i = 0; i < nodoImagenes.length; i++) {
        if(!nodoImagenes[i].classList.contains('fuego')) {
            nodoImagenes[i].classList.add('desactivar');
        } else if (nodoImagenes[i].classList.contains('desactivar')){
            nodoImagenes[i].classList.remove('desactivar');
        }
    }
});

nodoBotonAgua.addEventListener ('click', function() {
    for (let i = 0; i < nodoImagenes.length; i++) {
        if(!nodoImagenes[i].classList.contains('agua')) {
            nodoImagenes[i].classList.add('desactivar');
        } else if (nodoImagenes[i].classList.contains('desactivar')){
            nodoImagenes[i].classList.remove('desactivar');
        }
    }
});

nodoBotonTierra.addEventListener ('click', function() {
    for (let i = 0; i < nodoImagenes.length; i++) {
        if(!nodoImagenes[i].classList.contains('tierra')) {
            nodoImagenes[i].classList.add('desactivar');
        } else if (nodoImagenes[i].classList.contains('desactivar')){
            nodoImagenes[i].classList.remove('desactivar');
        }
    }
});

for (let i = 0; i < nodoImagenes.length; i++) {
    let nodoOverlay = nodoImagenes[i].querySelector(".overlay");
    nodoOverlay.addEventListener ('click', function() {
        let nodoImagen = nodoImagenes[i].querySelector(".imagen");
        let nodoModal = document.querySelector(".modal");

        let nodoDiv = document.createElement('div');
        nodoDiv.classList.add('divModal');
        let nodoImagenModal = document.createElement('img');
        nodoImagenModal.classList.add('imagenModal');
        nodoImagenModal.src = nodoImagen.src;
        
        nodoModal.append(nodoDiv);
        nodoDiv.append(nodoImagenModal);
        nodoModal.classList.add('activo');

        nodoModal.addEventListener('click', function(evento){
            evento.stopPropagation();
            if(evento.target === nodoModal || evento.target === nodoDiv) {
                nodoModal.classList.remove('activo');
                nodoModal.removeChild(nodoDiv);
            }
        });
    });
}

