var express = require('express');
var router = express.Router();

const moviesController = require('../controllers/moviesController');

router.get('/', moviesController.all);

router.get('/genres', moviesController.showGenre);
router.get('/actors', moviesController.showActor);
router.get('/episodes', moviesController.showEpisode);
router.get('/migrations', moviesController.showMigration);
router.get('/series', moviesController.showSerie);
router.get('/users', moviesController.showUser);
router.get('/seasons', moviesController.showSeason);

module.exports = router;