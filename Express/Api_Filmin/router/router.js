const express = require('express');
const router  = express.Router();

const { getIndex } = require('../controllers/index.controller.js');
const { getPeliculas, getPeliculaByUrl, getPeliculasByGenero, getPeliculasByDirector } = require('./../controllers/peliculas.controllers.js');
const { getSeries } = require('./../controllers/series.controllers.js');

router.route('/')
    .get( getIndex )

router.route('/peliculas')
    .get( getPeliculas )

router.route('/pelicula/:url')
    .get( getPeliculaByUrl )

router.route('/peliculas/genero/:genero')
    .get( getPeliculasByGenero )

router.route('/peliculas/director/:director')
    .get( getPeliculasByDirector )

router.route('/series')
    .get( getSeries )

module.exports = {
    router
}