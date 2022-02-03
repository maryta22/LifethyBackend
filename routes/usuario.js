const { obtenerUsuario, obtenerUsuariosPorId, enviarUsuarios, modificarUsuario, eliminarUsuario } = require('../controllers/usuario.controller');

var express = require('express');
var router = express.Router();

/* GET all users */
router.get('/', obtenerUsuario );

/* GET users by id */
router.get('/:idUsuario', obtenerUsuariosPorId);

/* POST producto */
router.post('/', enviarUsuarios );

/* PUT usuario */
router.put('/:idUsuario', modificarUsuario);


/* DELETE producto */
router.delete('/:idUsuario', eliminarUsuario );

module.exports = router;
