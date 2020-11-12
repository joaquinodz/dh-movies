const express = require('express');
const router = express.Router();

const genresController = require('../controllers/genresController');

router.get('/', genresController.showGenre);
router.get('/:genre_id', genresController.getMoviesFromGenre);

module.exports = router;