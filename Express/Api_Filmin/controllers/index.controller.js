const bbdd = require('./../bbdd');

function getIndex( req , res ) {
    res.status(200).json({
        data : bbdd
    });
}

module.exports = {
    getIndex
}