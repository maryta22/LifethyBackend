const Factura = require('../models').factura;


exports.obtenerFactura = (req, res, next) => {
    Factura.findAll({
        attributes: { exclude: [ "updatedAt", "createdAt"] }
    })
    .then(facturas => {
        res.json(facturas);
    })
    .catch(error => res.status(400).send(error))
}

exports.obtenerFacturaPorId = (req, res, next) => {
    Factura.findAll({
        attributes: { exclude: [ "updatedAt", "createdAt"] },
        where: { id: req.params.id }
    })
    .then(facturas => {
        res.json(facturas);
    })
    .catch(error => res.status(400).send(error))
}

exports.enviarFactura = (req, res, next) => {
    Factura.create(req.body);
}

exports.modificarFactura = (req, res, next) => {
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

}

exports.eliminarFactura = (req, res, next) => {
    let idFactura = req.body.id;

    let buscarFactura = {
		where: { id: idFactura }
	}

    Factura.destroy(buscarFactura)
	.then(() => {
		res.json('Cliente Eliminado');
	});
}