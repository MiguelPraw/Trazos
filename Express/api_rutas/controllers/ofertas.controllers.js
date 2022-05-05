const { bbdd } = require('./../bbdd.js');

function getOfertas( req , res ) {
    res.status(200).json({
        data : bbdd.ofertas
    })
}
module.exports = {
    getOfertas
}