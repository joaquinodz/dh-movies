var express = require('express');
var router = express.Router();

const actorsController = require('../controllers/actorsController');

router.get('/', actorsController.all);
router.get('/:id', actorsController.showActor);


module.exports = router;