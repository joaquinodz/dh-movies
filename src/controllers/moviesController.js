const { Movie, Genre, Actor, Episode, Migration, Serie, User, Season } = require('../database/models');
const { Op } = require('sequelize');

exports.all = async (req, res) => {
    try {
        const movies = await Movie.findAll({
            include: ['Genre', 'actores']
        });
        // res.json(movies);
        res.render('index', { movies: movies });
    } catch (error) {
        console.log(error);
    }
};
exports.showGenre = async (req, res) => {
    try {
        const genres = await Genre.findAll();
        res.render('genres', { genres: genres });
    } catch(error) {
        console.log(error);
    }
};
exports.showActor = async (req, res) => {
    try {
        const actors = await Actor.findAll();
        res.render('actors', { actors: actors });
    } catch(error) {
        console.log(error);
    }
};
exports.showEpisode = async (req, res) => {
    try {
        const episodes = await Episode.findAll();
        res.render('episode', { episodes: episodes });
    } catch(error) {
        console.log(error);
    }
};
exports.showMigration = async (req, res) => {
    try {
        const migrations = await Migration.findAll();
        res.render('migration', { migrations: migrations });
    } catch(error) {
        console.log(error);
    }
};
exports.showSerie = async (req, res) => {
    try {
        const series = await Serie.findAll();
        res.render('series', { series: series });
    } catch(error) {
        console.log(error);
    }
};
exports.showUser = async (req, res) => {
    try {
        const users = await User.findAll();
        res.render('users', { users: users });
    } catch(error) {
        console.log(error);
    }
};
exports.showSeason = async (req, res) => {
    try {
        const seasons = await Season.findAll();
        res.render('seasons', { seasons: seasons });
    } catch(error) {
        console.log(error);
    }
};
exports.findMovieById = async (req, res) => {
    let id = req.params.id;
    try {
        const search = await Movie.findByPk(id);
        res.render('list', { list: search });
    } catch(error) {
        console.log(error);
    }
};
exports.findMovieByPartialName = async (req, res) => {
    let searchQuery = req.body.buscar;
    try {
        const queryResult = await Movie.findAll({
            where: {
				title: {
				  	[Op.like]: '%' + searchQuery + '%'
				}
			},
		});
        res.render('search', { results: queryResult });
    } catch (error) {
        console.log(error);
	}
};
exports.showNew = async (req, res) => {
    try {
        const newMovies = await Movie.findAll({
            order: [
                ['release_date', 'DESC']
            ],
            limit: 5
        });
        res.render('newMovies', { newMovies: newMovies });
    } catch (error) {
        console.log(error);
    }
};
exports.showRecommended = async (req, res) => {
	try {
        const recommendedMovies = await Movie.findAll({
            where: {
				rating: {
				  	[Op.gte]: 8
				}
			},
        });
        res.render('recommended', { recommended: recommendedMovies });
    } catch (error) {
        console.log(error);
    }
};

/*
    CRUD
*/

/**
 * GET: Muestra el formulario para crear la pelicula.
 * 
 * Antes consulta a la base de datos para saber que generos y actores estan disponibles.
 */
exports.create = async (req, res) => {
    try {
        const generos = await Genre.findAll();
        const actores = await Actor.findAll();

        res.render('movies/create', { generos, actores });
    } catch (error) {
        console.log(error);
    }
};

/**
 * POST: Guarda los nuevos datos de la pelicula
 */
exports.store = async (req, res) => {
    try {
        const newMovie = await Movie.create(req.body);
        await newMovie.addActores(req.body.actores);

        res.redirect('/');
    } catch (error) {
        console.log(error);
    }
};

/**
 * GET: Muestra el formulario para actualizar los datos de una pelicula.
 * 
 * Antes consulta a la base de datos para saber que generos y actores estan disponibles.
 */
exports.update = async (req, res) => {
    try {
        const movieId = req.params.id;
        const toEdit = await Movie.findByPk(movieId, {
            include: ['Genre', 'actores']
        });
        const generos = await Genre.findAll();
        const actores = await Actor.findAll();

        res.render('movies/update', { toEdit, generos, actores });
    } catch (error) {
        console.log(error);
    }
};

exports.change = async (req, res) => {
    try {
        const movieId = req.params.id;

        // Obtenemos la info. de la película de la base de datos.
        const modifiedMovie = await Movie.findByPk(movieId, {
            include: ['Genre', 'actores']
        });
        
        // Actualizamos los actores de la película en la tabla intermedia `actor_movie`
        await modifiedMovie.removeActores(modifiedMovie.actores);
        await modifiedMovie.addActores(req.body.actores);

        // Actualizamos la info. de la película en la tabla `peliculas`
        await modifiedMovie.update(req.body);

        res.redirect('/');
    } catch (error) {
        console.log(error);
    }
};