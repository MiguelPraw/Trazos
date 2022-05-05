const express = require('express');
const router  = express.Router();

const { getIndex } = require('../controllers/index.controller.js');
const { getPeliculas } = require('./../controllers/peliculas.controllers.js');

router.route('/')
    .get( getIndex )

router.route('/peliculas')
    .get( getPeliculas )


module.exports = {
    router
}