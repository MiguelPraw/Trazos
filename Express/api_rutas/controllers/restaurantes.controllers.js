const { bbdd } = require('./../bbdd.js');

function getRestaurantes( req , res ) {
    res.status(200).json( {
        data : bbdd.restaurantes
    });
}

function getRestauranteById( req , res ) {
    let { id } = req.params;
    let buscado = bbdd.restaurantes.find( restaurante => restaurante.id === id );
    
    let estado = buscado ? 200 : 404;
    let data   = buscado ? buscado : [];
    let msj    = buscado ? 'Existe' : 'No existe el restaurante';

    res.status(estado).json({ data , msj });
}

function getRestaurantesByTipo ( req , res ) {
    let { tipo } = req.params;

    let buscado = bbdd.restaurantes.filter( restaurante => restaurante.tipos.includes( tipo ));

    let estado = buscar.length != 0 ? 200 : 404;
    let data   = buscar ? buscar : [];
    let msj    = buscar ? 'Encontrado' : 'No encontrado';

    res.status(estado).json({ data, msj });
}

module.exports = {
    getRestaurantes,
    getRestauranteById,
    getRestaurantesByTipo
}