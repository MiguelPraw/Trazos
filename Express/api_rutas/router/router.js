const express   = require('express');
const router    = express.Router();

const { getRestaurantes, getRestauranteById , getRestaurantesByTipo }   = require('./../controllers/restaurantes.controllers.js');
const { getOfertas }        = require('./../controllers/ofertas.controllers.js');
const { getCiudades }       = require('./../controllers/ciudades.controllers.js');
const { getIndex }          = require('./../controllers/index.controller.js');

router.route('/')
    .get( getIndex )

router.route('/restaurantes')
    .get( getRestaurantes )

router.route('/restaurantes/:id')
    .get( getRestauranteById )

router.route('/restaurantes/tipos/:tipo')
    .get( getRestaurantesByTipo )

router.route('/ofertas')
    .get( getOfertas )

router.route('/ciudades')
    .get( getCiudades );

module.exports = {
    router
}