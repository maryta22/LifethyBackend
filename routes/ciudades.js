var express = require('express');
const { obtenerCiudades } = require('../controllers/ciudades.controllers');
var router = express.Router();

router.get('/', obtenerCiudades);

module.exports = router;