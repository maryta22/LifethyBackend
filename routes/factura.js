var express = require('express');
var router = express.Router();

const Sequelize = require('sequelize');
const Factura = require('../models').factura;

/* GET home page. */
router.get('/', function(req, res, next) {
    Factura.findAll({
        attributes: { exclude: [ "updatedAt", "createdAt"] }
    })
    .then(facturas => {
        res.json(facturas);
    })
    .catch(error => res.status(400).send(error))
});

/* GET producto por id */
router.get('/factura/:id', function(req, res, next) {
    Factura.findAll({
        attributes: { exclude: [ "updatedAt", "createdAt"] },
        where: { id: req.params.id }
    })
    .then(facturas => {
        res.json(facturas);
    })
    .catch(error => res.status(400).send(error))
});

/* POST producto */
router.post('/', (req, res, next) => {
    Factura.create(req.body);
});

/* PUT producto */
router.put('/', (req, res, next) => {
    let idFactura = req.body.id;

    let buscarFactura = {
		where: { id: idFactura }
	}

    Factura.findOne(buscarFactura)
    .then(factura => {
		factura.update(req.body)
		.then(nuevaFactura => {
			res.json(nuevaFactura);
		})
	});

});

/* DELETE producto */
router.delete('/', (req, res, next) => {
    let idFactura = req.body.id;

    let buscarFactura = {
		where: { id: idFactura }
	}

    Factura.destroy(buscarFactura)
	.then(() => {
		res.json('Cliente Eliminado');
	});
});

module.exports = router;