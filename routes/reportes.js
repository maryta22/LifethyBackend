var express = require('express');
const { obtenerReportes } = require('../controllers/reportes.controller');
var router = express.Router();

router.get('/', obtenerReportes);

module.exports = router;