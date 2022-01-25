var express = require('express');
var router = express.Router();

const Sequelize = require('sequelize');
const Carrito = require('../models').carrito;

/* GET home page. */
router.get('/', function(req, res, next) {
    Carrito.findAll({
        attributes: { exclude: [ "updatedAt", "createdAt"] }
    })
    .then(carritos => {
        res.json(carritos);
    })
    .catch(error => res.status(400).send(error))
});

/* GET producto por id */
router.get('/carrito/:id', function(req, res, next) {
    Carrito.findAll({
        attributes: { exclude: [ "updatedAt", "createdAt"] },
        where: { id: req.params.id }
    })
    .then(carritos => {
        res.json(carritos);
    })
    .catch(error => res.status(400).send(error))
});

/* POST producto */
router.post('/', (req, res, next) => {
    Carrito.create(req.body);
});

/* PUT producto */
router.put('/', (req, res, next) => {
    let idCarrito = req.body.id;

    let buscarCarrito = {
		where: { id: idCarrito }
	}

    Carrito.findOne(buscarCarrito)
    .then(carritos => {
		carritos.update(req.body)
		.then(nuevoCarrito => {
			res.json(nuevoCarrito);
		})
	});

});

/* DELETE producto */
router.delete('/', (req, res, next) => {
    let idCarrito = req.body.id;

    let buscarCarrito = {
		where: { id: idCarrito }
	}

    Carrito.destroy(buscarCarrito)
	.then(() => {
		res.json('Carrito Eliminado');
	});
});

module.exports = router;