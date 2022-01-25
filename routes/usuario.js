var express = require('express');
var router = express.Router();

const Sequelize = require('sequelize');
const Usuario = require('../models').usuario;
const Rol = require('../models').rol;

Rol.hasMany(Usuario,{foreignKey : 'idRol'});
Usuario.belongsTo(Rol,{foreignKey : 'idRol'});

/* GET all users */
router.get('/', function (req, res, next) {
    Usuario.findAll({
        attributes: { exclude: ["updatedAt", "createdAt"] },
        include: [
            {
                model: Rol,
                attributes: ['id', 'nombre'],
                required: false
            }
        ]
    })
        .then(usuarios => {
            res.json(usuarios);
        })
        .catch(error => res.status(400).send(error))
});

/* GET users by id */
router.get('/:idUsuario', function (req, res, next) {
    let id = req.params.idUsuario;
    Usuario.findAll({
        attributes: { exclude: ["updatedAt", "createdAt"] },
        include: [
            {
                model: Rol,
                attributes: ['id', 'nombre'],
                required: false
            }
        ],
        where: { id: id }
    })
        .then(usuario => {
            res.json(usuario);
        })
        .catch(error => res.status(400).send(error))
});

/* POST producto */
router.post('/', (req, res, next) => {
    Usuario.create(req.body)
        .then(respuesta => {
            res.send(req.body)
        });
});

/* PUT usuario */
router.put('/:idUsuario', (req, res, next) => {
    var id = req.params.idUsuario;

    Usuario.update(
        {
            username: req.body.username,
            correo: req.body.correo,
            password: req.body.password,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            telefono: req.body.telefono
        },
        { where: { id: id } }
    ).then(usuario => {
        res.send(usuario)
    })
        .catch(error => res.status(400).send(error))
});


/* DELETE producto */
router.delete('/:idUsuario', (req, res, next) => {
    var id = req.params.idUsuario;
    Usuario.destroy({
        where: { id: id }
    }).then(usuario => {
        res.send(console.log("removed succesfuly"))
    })
        .catch(error => res.status(400).send(error))
});

module.exports = router;
