var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.json({
        mensaje: 'Login'
    });
});

router.post('/validar', function(req, res, next) {
    let usuarioCliente = req.body.user;
    let contrasenaCliente = req.body.password;
    //console.log(`Usuario: ${usuarioCliente}, Contraseña: ${contrasenaCliente}`);
});

module.exports = router;