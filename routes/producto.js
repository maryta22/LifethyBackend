var express = require('express');
const { enviarFacturas } = require('../controllers/factura.controller');
const { obtenerProducto, obtenerProductoPorId, modificarProducto, eliminarProducto, enviarProducto } = require('../controllers/producto.controller');
var router = express.Router();


/* GET home page. */
router.get('/', obtenerProducto);

/* GET producto por id */
router.get('/producto/:id', obtenerProductoPorId );

/* POST producto */
router.post('/', enviarProducto);

/* PUT producto */
router.put('/', modificarProducto);

/* DELETE producto */
router.delete('/', eliminarProducto);

module.exports = router;