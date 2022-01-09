var express = require('express');
var router = express.Router();

const Sequelize = require('sequelize');
const Producto = require('../models').producto;

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
        where: {
            id: req.params.id
          }
    })
    .then(productos => {
        res.json(productos);
    })
    .catch(error => res.status(400).send(error))
});

/* POST producto */
router.post('/', (req, res, next) => {
    let entrada = req.body.dato;
    console.log(entrada)
});

module.exports = router;