var express = require('express');
const { recibirFormsContacto } = require('../controllers/contactanos.controllers');
var router = express.Router();

router.post('/', recibirFormsContacto);

module.exports = router;