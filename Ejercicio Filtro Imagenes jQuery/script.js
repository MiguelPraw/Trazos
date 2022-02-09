'use strict'

let nodoGrid = document.querySelector("#grid");
let nodoImagenes = nodoGrid.querySelectorAll(".grid__img");

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

$('#botonTodas').on({
    click: function () {
        $('.grid__img').each( function () {
            if($(this).hasClass('desactivar')){
                $(this).removeClass('desactivar');
            }
        });
    }
});

$('#botonFuego').on({
    click: function () {
        $('.grid__img').each( function () {
            if (!$(this).hasClass('fuego')) {
                $(this).addClass('desactivar');
            } else if ($(this).hasClass('desactivar')) {
                $(this).removeClass('desactivar');
            }
        });
    }
});

$('#botonAgua').on({
    click: function () {
        $('.grid__img').each( function () {
            if (!$(this).hasClass('agua')) {
                $(this).addClass('desactivar');
            } else if ($(this).hasClass('desactivar')) {
                $(this).removeClass('desactivar');
            }
        });
    }
});

$('#botonTierra').on({
    click: function () {
        $('.grid__img').each( function () {
            if (!$(this).hasClass('tierra')) {
                $(this).addClass('desactivar');
            } else if ($(this).hasClass('desactivar')) {
                $(this).removeClass('desactivar');
            }
        });
    }
});