var express = require('express');
const { obtenerFacturaPorId, enviarFactura, modificarFactura, eliminarFactura, obtenerFactura } = require('../controllers/factura.controller');
var router = express.Router();

/* GET home page. */
router.get('/', obtenerFactura);

/* GET producto por id */
router.get('/factura/:id', obtenerFacturaPorId );

/* POST producto */
router.post('/', enviarFactura );

/* PUT producto */
router.put('/', modificarFactura);

/* DELETE producto */
router.delete('/', eliminarFactura);

module.exports = router;