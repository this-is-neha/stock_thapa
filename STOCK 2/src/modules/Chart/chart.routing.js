const express = require('express');
const pieController = require('./chart.controller');

const router = express.Router();


router.get('/', (req, res) => pieController.getPie(req, res));


router.post('/:id?', (req, res) => pieController.saveOrUpdatePie(req, res));

module.exports = router;
