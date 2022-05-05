const { bbdd } = require('./../bbdd');

function getCiudades( req , res ) {
    res.status(200).json({
        data : bbdd.ciudades
    })
}

module.exports = {
    getCiudades
}