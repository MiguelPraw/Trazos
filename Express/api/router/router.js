const express = require('express')
const router  = express.Router()

const { getAlumnoById, postAlumno , putAlumno , deleteAlumno } = require('../controllers/alumno.controller')
const { getInicio } = require('./../controllers/inicio.controller')

router.route('/')
    .get( getInicio )

router.route('/alumno')
    .post( postAlumno )
    .put( putAlumno )

router.route('/alumno/:id')
    .get( getAlumnoById )
    .delete( deleteAlumno )

module.exports = {
    router
}