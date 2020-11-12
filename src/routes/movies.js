const express = require('express');
const router = express.Router();

const moviesController = require('../controllers/moviesController');

/* GET movies listing. */
router.get('/new', moviesController.showNew);
router.get('/recommended', moviesController.showRecommended);
router.post('/search', moviesController.findMovieByPartialName);

// CRUD methods
router.get('/create', moviesController.create);
router.post('/store', moviesController.store);

router.get('/update/:id', moviesController.update);
router.put('/update/:id', moviesController.change);

router.get('/delete/:id', moviesController.delete);

router.get('/:id', moviesController.findMovieById);

module.exports = router;
