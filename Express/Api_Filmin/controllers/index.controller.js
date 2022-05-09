const { peliculas , slidersInicio , sliderCategorias , sliderCabecera } = require('./../bbdd');

function getIndex( req , res ) {
    res.status(200).json({
        data : {
            sliderCabecera : sliderCabecera,
            sliderCategorias : sliderCategorias,
            slidersInicio : slidersInicio,
        }
    });
}

module.exports = {
    getIndex
}