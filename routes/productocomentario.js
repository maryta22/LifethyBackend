var express = require('express');
const { validarTokens } = require('../autenticacion');
const { obtenerComentarioProducto, crearComentarioProducto, modificarComentarioProducto, eliminarComentarioProducto } = require('../controllers/comentarioproducto.controller');
var router = express.Router();


/* GET producto por id */
router.get('/:idProducto',  obtenerComentarioProducto);

/* POST producto */
router.post('/:idProducto',validarTokens,crearComentarioProducto );

/* PUT producto */
router.put('/:comentarioID',validarTokens,modificarComentarioProducto);

/* DELETE producto */
router.delete('/:comentarioID', validarTokens,eliminarComentarioProducto);

module.exports = router;