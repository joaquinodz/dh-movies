const { Movie, Genre, Actor, Episode, Migration, Serie, User, Season } = require('../database/models');
const { Op } = require('sequelize');

exports.all = async (req, res) => {
    try {
        const movies = await Movie.findAll();
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
		console.log(queryResult);
        res.render('index', { results: queryResult });
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
