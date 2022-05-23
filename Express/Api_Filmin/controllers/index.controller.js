// const { peliculas , slidersInicio , sliderCategorias , sliderCabecera } = require('./../bbdd');
const { SliderCabecera , SliderCategorias , SlidersInicio , Pelicula } = require('./../mongoose');

async function getIndex( req , res ) {

    const sliderCabecera = await SliderCabecera.find();
    const sliderCategorias = await SliderCategorias.find();
    const slidersInicio = await SlidersInicio.find();
    const peliculas = await Pelicula.find();

    res.status(200).json({
        data : {
            sliderCabecera   : sliderCabecera,
            sliderCategorias : sliderCategorias,
            slidersInicio    : slidersInicio,
            peliculas        : peliculas
        },
        msj  : 'Correcto'
    });
}

module.exports = {
    getIndex,
    Pelicula
}