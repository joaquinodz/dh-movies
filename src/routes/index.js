var express = require('express');
var router = express.Router();

const moviesController = require('../controllers/moviesController');

router.get('/', moviesController.all);
router.get('/users', moviesController.showUser);

module.exports = router;