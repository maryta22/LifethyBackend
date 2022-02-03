const Carrito = require('../models').carrito;

exports.obtenerCarrito = (req, res, next) => {
    Carrito.findAll({
        attributes: { exclude: [ "updatedAt", "createdAt"] }
    })
    .then(carritos => {
        res.json(carritos);
    })
    .catch(error => res.status(400).send(error))
}

exports.obtenerCarritoPorId = (req, res, next) => {
    Carrito.findAll({
        attributes: { exclude: [ "updatedAt", "createdAt"] },
        where: { id: req.params.id }
    })
    .then(carritos => {
        res.json(carritos);
    })
    .catch(error => res.status(400).send(error))
}

exports.enviarCarrito = (req, res, next) => {
    Carrito.create(req.body);
}

exports.modificarCarrito = (req, res, next) => {
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

}

exports.eliminarCarrito =  (req, res, next) => {
    let idCarrito = req.body.id;

    let buscarCarrito = {
		where: { id: idCarrito }
	}

    Carrito.destroy(buscarCarrito)
	.then(() => {
		res.json('Carrito Eliminado');
	});
}