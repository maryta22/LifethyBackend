var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

//conexión con moongoDB
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1/proyecto',{useNewUrlParser: true, useUnifiedTopology: true});
var con = mongoose.connection;

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productoRouter = require('./routes/producto');
var usuarioRouter = require('./routes/usuario');
var facturaRouter = require('./routes/factura');
var carritoRouter = require('./routes/carrito');
var estadisticaRouter = require('./routes/estadisticas');

var app = express();

app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/productos', productoRouter);
app.use('/usuarios', usuarioRouter);
app.use('/facturas', facturaRouter);
app.use('/carritos', carritoRouter);
app.use('/estadisticas', estadisticaRouter);

module.exports = app;
