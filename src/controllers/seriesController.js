const { Episode, Serie, Season } = require('../database/models');

exports.all = async (req, res) => {
    try {
        const series = await Serie.findAll({ include: { all: true } });
        // res.json(series);
        res.render('series', { series: series });
    } catch(error) {
        console.log(error);
    }
};

exports.showSerie = async (req, res) => {
    try {
        const serieId = req.params.id;
        const serie = await Serie.findByPk(serieId, { include: { all: true } });
        res.json(serie);
        // res.render('series', { series: series });
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

exports.showSeason = async (req, res) => {
    try {
        const seasons = await Season.findAll();
        res.render('seasons', { seasons: seasons });
    } catch(error) {
        console.log(error);
    }
};