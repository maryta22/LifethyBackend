var express = require('express');
const { obtenerCarrito, enviarCarrito, eliminarCarrito, modificarCarrito, obtenerCarritoPorId } = require('../controllers/carrito.controller');
var router = express.Router();

/* GET home page. */
router.get('/', obtenerCarrito );

/* GET producto por id */
router.get('/carrito/:id', obtenerCarritoPorId );

/* POST producto */
router.post('/', enviarCarrito );

/* PUT producto */
router.put('/', modificarCarrito );

/* DELETE producto */
router.delete('/', eliminarCarrito );

module.exports = router;