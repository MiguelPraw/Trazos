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

const putAlumno = ( req , res ) => {

    let { id } = req.body;
    console.log(req.body)

    let resultado = clase.map( alumno => {
        return (alumno.id === id) ? alumno = req.body : alumno;
    })

    let data = resultado;
    console.log(resultado);

    res.status(200).json({
        data,
        msj  : 'Actualisado'
    })
}

const deleteAlumno = ( req , res ) => {

    let { id } = req.params;
    console.log( req.params )

    res.status(200).json({
        data : [],
        msj  : 'Eliminado'
    })
}

module.exports = {
    getAlumnoById,
    postAlumno,
    putAlumno,
    deleteAlumno
}