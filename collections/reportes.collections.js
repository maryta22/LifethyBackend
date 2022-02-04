const { Timestamp } = require('mongodb');
var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var reportesSchema = new Schema({
	'id_usuario' : String,
	'fechaInicio' : { type : Date, default: Date.now },
	'fechaFin' : { type : Date, default: Date.now },
	'medio' : String
});

mongoose.set("debug", true);

module.exports = mongoose.model('reportes', reportesSchema,'reportes');