const express = require('express')
const router  = express.Router()

const { getAlumnoById, postAlumno } = require('../controllers/alumno.controller')
const { getInicio } = require('./../controllers/inicio.controller')

router.route('/')
    .get( getInicio )

router.route('/alumno')
    .post( postAlumno )

router.route('/alumno/:id')
    .get( getAlumnoById )

module.exports = {
    router
}