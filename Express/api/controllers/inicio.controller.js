const { clase : data } = require('../bbdd')

function getInicio ( req , res ){
    res.status(200).json({
        data, msj : 'Correcto'
    })
}

module.exports = {
    getInicio
}