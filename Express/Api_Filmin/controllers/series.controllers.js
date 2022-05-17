
const { peliculas } = require('./../bbdd');

function getSeries( req , res ) {
    let data = peliculas.filter( pelicula => pelicula.serie );

    res.status(200).json({
        data,
        msj : 'Encontrado'
    })
}

module.exports = {
    getSeries
}