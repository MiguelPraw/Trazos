'use strict'

$(window).on({
    scroll: function () {
        console.clear();
        let top_scroll = Math.round($(this).scrollTop());
        let bodyHeight = Math.round($('body').height());
        let windowHeight = Math.round($(window).height());
        let porcentajeWidth = Math.trunc(((top_scroll + windowHeight) / bodyHeight) * 100);
        console.log(top_scroll);
        console.log(windowHeight);
        console.log(bodyHeight);
        console.log("Relacion TOP / BODY:", top_scroll / bodyHeight);
        console.log("Relacion");
        console.log("Distancia desde el top hasta abajo del window", top_scroll + windowHeight);
        $('#barra').css({
            'width' : `${porcentajeWidth}%`
        });
    }
});