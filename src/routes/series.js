var express = require('express');
var router = express.Router();

const seriesController = require('../controllers/seriesController');

router.get('/', seriesController.all);

module.exports = router;