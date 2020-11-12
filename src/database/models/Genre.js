const { sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, dataType) => {
    const Genre = sequelize.define("Genre", {
        name: dataType.STRING,
        ranking: dataType.INTEGER,
        active: dataType.INTEGER
    });
    Genre.associate = models => {
        Genre.hasMany(models.Movie);
    };

    return Genre;
};