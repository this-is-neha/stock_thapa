const express = require('express');
const itemController = require('./table.controller');

const router = express.Router();

router.get('/', itemController.getAll);
router.post('/', itemController.create);
router.put('/:id', itemController.update);
router.delete('/:id', itemController.delete);

module.exports = router;
