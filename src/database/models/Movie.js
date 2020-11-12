const { sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, dataTypes) => {
    const Movie = sequelize.define('Movie', {
        title: dataTypes.STRING,
        rating: dataTypes.DECIMAL,
        awards: dataTypes.INTEGER,
        release_date: dataTypes.DATEONLY,
        length: dataTypes.INTEGER,
        genre_id: dataTypes.INTEGER
    });
    Movie.associate = models => {
        Movie.belongsTo(models.Genre);
        Movie.belongsToMany(models.Actor, {
            as: 'actores',
            through: 'actor_movie'
        });
    };

    return Movie;
};