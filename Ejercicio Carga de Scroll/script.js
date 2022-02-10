'use strict'

$(window).on({
    scroll: function () {
        let top_scroll = Math.round($(this).scrollTop());
        let bodyHeight = Math.round($('body').height());
        let windowHeight = Math.round($(window).height());
        
        let cosas = bodyHeight - windowHeight;
        let porcentajeWidth = Math.trunc((top_scroll / cosas) * 100);

        $('#barra').css({
            'width' : `${porcentajeWidth}%`
        });
    }
});

