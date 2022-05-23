// const { peliculas } = require('./../bbdd');

const { Pelicula } = require('./../mongoose');

async function getPeliculas( req , res ) {

    let peliculas = await Pelicula.find();

    res.status(200).json({
        data : peliculas,
        msj : 'Correcto'
    });
}

async function getPeliculaByUrl( req , res ) {
    let { url } = req.params;

    let pelicula = await Pelicula.find( { url } );

    let estado = pelicula ? 200 : 404;
    let data   = pelicula ? pelicula : {};
    let msj    = pelicula ? 'Encontrada' : 'No encontrada';

    res.status(estado).json({
        data,
        msj
    });
}

function getPeliculasByGenero( req , res ) {
    let { genero } = req.params;
    genero = genero.charAt(0).toUpperCase() + genero.slice(1);
    
    let peliculasGenero = peliculas.filter( pelicula => pelicula.genero.includes( genero ));

    let estado = peliculasGenero.length != 0 ? 200 : 404;
    let data   = peliculasGenero ? peliculasGenero : [];
    let msj    = peliculasGenero ? 'Encontrado' : 'No encontrado';

    res.status(estado).json({
        data,
        msj
    });
}

async function getPeliculasByDirector( req , res ) {
    let { director } = req.params;

    let peliculas = await Pelicula.find();
    let peliculasDirector = peliculas.filter( pelicula => pelicula.director.url.includes( director ));

    let estado = peliculasDirector.length != 0 ? 200 : 404;
    let data   = peliculasDirector ? peliculasDirector : [];
    let msj    = peliculasDirector ? 'Encontrado' : 'No encontrado';

    res.status(estado).json({
        data,
        msj
    });
}

module.exports = {
    getPeliculas,
    getPeliculaByUrl,
    getPeliculasByGenero,
    getPeliculasByDirector
}

