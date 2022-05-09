const { clase } = require('../bbdd')

const getAlumnoById = ( req , res ) => {

    const { id } = req.params
    
    let buscar  = clase.find( alumno => alumno.id === parseInt(id) )
    let data    = buscar ? buscar : {}
    let msj     = buscar ? 'Todo Correcto' : 'No existe el ID para un alumno'
    
    res.status(200).json({ data , msj })
}

const postAlumno = ( req , res ) => {

    const { nombre } = req.body;

    clase.push({
        id : clase.length,
        nombre
    })

    let data = clase;
    let msj  = 'Alumno añadido';

    res.status(200).json({ data , msj })
}

module.exports = {
    getAlumnoById,
    postAlumno
}