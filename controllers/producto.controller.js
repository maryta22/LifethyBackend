const Producto = require('../models').producto;
const Descuento = require('../models').descuento;

exports.obtenerProducto = (req, res, next) => {
    Producto.findAll({
        attributes: { exclude: [ "updatedAt", "createdAt"] },
        include: [{model : Descuento, as: "descuento", attributes: { exclude: [ "updatedAt", "createdAt"] },}]
    })
    .then(productos => {
        res.json(productos);
    })
    .catch(error => {
        console.log(error)
        res.status(400).send(error)})
}

exports.obtenerProductoPorId = function(req, res, next) {
    
    Producto.findAll({
        attributes: { exclude: [ "updatedAt", "createdAt"] },
        where: { id: req.params.id }
    })
    .then(productos => {
        res.json(productos);
    })
    .catch(error => res.status(400).send(error))
}

exports.enviarProducto = (req, res, next) => {
    Producto.create(req.body);
}

exports.modificarProducto = (req, res, next) => {
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

}

exports.eliminarProducto = (req, res, next) => {
    let idProducto = req.body.id;

    let buscarProducto = {
		where: { id: idProducto }
	}

    Producto.destroy(buscarProducto)
	.then(() => {
		res.json('Cliente Eliminado');
	});
}