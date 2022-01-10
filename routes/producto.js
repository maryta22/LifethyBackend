var express = require('express');
var router = express.Router();

const Sequelize = require('sequelize');
const Producto = require('../models').producto;
const Categoria = require('../models').categoria;
const Descuento = require('../models').descuento;
const Inventario = require('../models').inventario;

/* GET home page. */
router.get('/', function(req, res, next) {
    Producto.findAll({
        attributes: { exclude: [ "updatedAt", "createdAt"] }
    })
    .then(productos => {
        res.json(productos);
    })
    .catch(error => res.status(400).send(error))
});

/* GET producto por ID. */
router.get('/producto/:id', function(req, res, next) {
    Producto.findAll({
        attributes: { exclude: [ "updatedAt", "createdAt"] },
        where: { id: req.params.id }
    })
    .then(productos => {
        res.json(productos);
    })
    .catch(error => res.status(400).send(error))
});

/* POST producto */
router.post('/', (req, res, next) => {
    Producto.create(req.body);
});

/* PUT producto */
router.put('/', (req, res, next) => {
    let idProducto = req.body.id;

    let buscarProducto = {
		where: { id: idProducto }
	}
    
    Producto.findOne(buscarProducto)
    .then(producto => {
		producto.update(req.body)
		.then(nuevoProducto => {
			res.json(nuevoProducto);
		})
	});

});

module.exports = router;