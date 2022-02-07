'use strict'

$('#btnAbrir').on({
    click: function () {
        $('.menu').addClass('desplegado');
    }
});

$('.cerrar').on({
    click: function () {
        $('.menu').removeClass('desplegado');
    }
});