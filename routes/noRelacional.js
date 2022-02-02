var express = require('express');
const proyectoController = require('../controllers/proyectoController.controllers');
var router = express.Router();


/*
 * GET
 */
router.get('/', proyectoController.list);

/*
 * GET
 */
router.get('/:id', proyectoController.show);

/*
 * POST
 */
router.post('/', proyectoController.create);

/*
 * PUT
 */
router.put('/:id', proyectoController.update);

/*
 * DELETE
 */
router.delete('/:id', proyectoController.remove);

module.exports = router;
