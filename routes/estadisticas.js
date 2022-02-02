var express = require('express');
const { obtenerTodo,ontenerFacturasPorMes,obtenerTiposDePago,obtenerIngresosAnuales } = require('../controllers/graficas.controllers');
var router = express.Router();

router.get('/', obtenerTodo);

router.get('/facturacion-anual', ontenerFacturasPorMes);

router.get('/tipos-pago', obtenerTiposDePago)

router.get('/ingresos-anuales', obtenerIngresosAnuales)

module.exports = router;