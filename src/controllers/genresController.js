const { Movie, Genre, Actor, Episode, Migration, Serie, User, Season } = require('../database/models');
const { Op } = require('sequelize');

exports.showGenre = async (req, res) => {
    try {
        const genres = await Genre.findAll();
        res.render('genres', { genres: genres });
    } catch(error) {
        console.log(error);
    }
};

exports.getMoviesFromGenre = async (req, res) => {
    const genre_id = req.params.genre_id;
    try {
        const query = await Genre.findByPk(genre_id, {
            include: {
                all: true
            }
        });
        // res.json(query.Movies)
        res.render('genres', { genre: query.name, moviesFromGenre: query.Movies });
    } catch(error) {
        console.log(error);
    }
};