const { peliculas , slidersInicio , sliderCategorias } = require('./../bbdd');

function getIndex( req , res ) {
    res.status(200).json({
        data : {
            slidersInicio : slidersInicio,
            sliderCategorias : sliderCategorias
        }
    });
}

module.exports = {
    getIndex
}