var ProyectoModel = require('../collections/proyecto.collections');

/**
 * proyectoController.js
 *
 * @description :: Server-side logic for managing proyectos.
 */
module.exports = {

    /**
     * proyectoController.list()
     */
    list: function (req, res) {
        ProyectoModel.find(function (err, proyectos) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting proyecto.',
                    error: err
                });
            }

            return res.json(proyectos);
        });
    },

    /**
     * proyectoController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        ProyectoModel.findOne({id_usuario: id}, function (err, proyecto) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting proyecto.',
                    error: err
                });
            }

            if (!proyecto) {
                return res.status(404).json({
                    message: 'No such proyecto'
                });
            }

            return res.json(proyecto);
        });
    },

    /**
     * proyectoController.create()
     */
    create: function (req, res) {
        var proyecto = new ProyectoModel({
			id_usuario : req.body.id_usuario,
			id_rol : req.body.id_rol,
			nombre_usuario : req.body.nombre_usuario,
			correo : req.body.correo,
			contrasena : req.body.contrasena,
			nombre : req.body.nombre,
			apellido : req.body.apellido,
			telefono : req.body.telefono,
			id_carrito : req.body.id_carrito,
			total : req.body.total,
			nota : req.body.nota,
			id_factura : req.body.id_factura,
			metodo_de_pago : req.body.metodo_de_pago,
			fecha : req.body.fecha,
			id_item : req.body.id_item,
			id_producto : req.body.id_producto,
			cantidad : req.body.cantidad,
			fecha_profe : req.body.fecha_profe
        });

        proyecto.save(function (err, proyecto) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating proyecto',
                    error: err
                });
            }

            return res.status(201).json(proyecto);
        });
    },

    /**
     * proyectoController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        ProyectoModel.findOne({id_usuario: id}, function (err, proyecto) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting proyecto',
                    error: err
                });
            }

            if (!proyecto) {
                return res.status(404).json({
                    message: 'No such proyecto'
                });
            }

            proyecto.id_usuario = req.body.id_usuario ? req.body.id_usuario : proyecto.id_usuario;
			proyecto.id_rol = req.body.id_rol ? req.body.id_rol : proyecto.id_rol;
			proyecto.nombre_usuario = req.body.nombre_usuario ? req.body.nombre_usuario : proyecto.nombre_usuario;
			proyecto.correo = req.body.correo ? req.body.correo : proyecto.correo;
			proyecto.contrasena = req.body.contrasena ? req.body.contrasena : proyecto.contrasena;
			proyecto.nombre = req.body.nombre ? req.body.nombre : proyecto.nombre;
			proyecto.apellido = req.body.apellido ? req.body.apellido : proyecto.apellido;
			proyecto.telefono = req.body.telefono ? req.body.telefono : proyecto.telefono;
			proyecto.id_carrito = req.body.id_carrito ? req.body.id_carrito : proyecto.id_carrito;
			proyecto.total = req.body.total ? req.body.total : proyecto.total;
			proyecto.nota = req.body.nota ? req.body.nota : proyecto.nota;
			proyecto.id_factura = req.body.id_factura ? req.body.id_factura : proyecto.id_factura;
			proyecto.metodo_de_pago = req.body.metodo_de_pago ? req.body.metodo_de_pago : proyecto.metodo_de_pago;
			proyecto.fecha = req.body.fecha ? req.body.fecha : proyecto.fecha;
			proyecto.id_item = req.body.id_item ? req.body.id_item : proyecto.id_item;
			proyecto.id_producto = req.body.id_producto ? req.body.id_producto : proyecto.id_producto;
			proyecto.cantidad = req.body.cantidad ? req.body.cantidad : proyecto.cantidad;
			proyecto.fecha_profe = req.body.fecha_profe ? req.body.fecha_profe : proyecto.fecha_profe;
			
            proyecto.save(function (err, proyecto) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating proyecto.',
                        error: err
                    });
                }

                return res.json(proyecto);
            });
        });
    },

    /**
     * proyectoController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        ProyectoModel.findByIdAndRemove(id, function (err, proyecto) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the proyecto.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
