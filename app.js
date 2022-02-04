var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

//conexión con moongoDB
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1/proyecto',{useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Base de datos no relacional conectada!'))
    .catch(err => {
        console.error.bind(console, 'MongoDB connection error:')
    });
var con = mongoose.connection;

var indexRouter = require('./routes/index');
var productoRouter = require('./routes/producto');
var usuarioRouter = require('./routes/usuario');
var facturaRouter = require('./routes/factura');
var carritoRouter = require('./routes/carrito');
var estadisticaRouter = require('./routes/estadisticas');
var ciudadesRouter = require('./routes/ciudades');
var contactanosRouter = require('./routes/contactanos');
var autenticacionRouter = require('./routes/autenticacion');
var comentarioProductoRouter = require('./routes/productocomentario');
var reportesRouter = require('./routes/reportes')


var app = express();
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/', autenticacionRouter);
app.use('/productos', productoRouter);
app.use('/productos/comentarios',comentarioProductoRouter)
app.use('/usuarios', usuarioRouter);
app.use('/facturas', facturaRouter);
app.use('/carritos', carritoRouter);
app.use('/estadisticas', estadisticaRouter);
app.use('/ciudades', ciudadesRouter);
app.use('/contactanos', contactanosRouter);
app.use('/reportes', reportesRouter);


module.exports = app;
