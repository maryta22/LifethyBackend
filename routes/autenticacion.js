var express = require('express');
const { iniciarSesion } = require('../controllers/autenticacion.controller');
var router = express.Router();

router.post('/login', iniciarSesion)

//router.post('/register', )

module.exports = router;