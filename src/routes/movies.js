const express = require('express');
const router = express.Router();

const moviesController = require('../controllers/moviesController');

/* GET movies listing. */
router.get('/new', moviesController.showNew);
router.get('/recommended', moviesController.showRecommended);
router.post('/search', moviesController.findMovieByPartialName);

router.get('/detail/:id', moviesController.findMovieById);

module.exports = router;
