const express = require('express');
const router = express.Router();

const moviesController = require('../controllers/moviesController');

/* GET movies listing. */
router.get('/new', moviesController.showNew);
router.get('/recommended', moviesController.showRecommended);
router.post('/search', moviesController.findMovieByPartialName);

// CRUD methods
router.get('/create', moviesController.create);
router.post('/create', moviesController.store);

router.get('/edit/:id', moviesController.update);
router.put('/edit/:id', moviesController.change);

router.delete('/delete/:id', moviesController.delete);

router.get('/detail/:id', moviesController.findMovieById);

module.exports = router;
