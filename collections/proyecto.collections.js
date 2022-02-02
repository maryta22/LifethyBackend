var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var proyectoSchema = new Schema({
	'id_usuario' : String,
	'id_rol' : String,
	'nombre_usuario' : String,
	'correo' : String,
	'contrasena' : String,
	'nombre' : String,
	'apellido' : String,
	'telefono' : String,
	'id_carrito' : String,
	'total' : String,
	'nota' : String,
	'id_factura' : String,
	'metodo_de_pago' : String,
	'fecha' : Date,
	'id_item' : String,
	'id_producto' : String,
	'cantidad' : String,
	'fecha_profe' : Date
});

mongoose.set("debug", true);

module.exports = mongoose.model('proyecto', proyectoSchema,'proyecto');