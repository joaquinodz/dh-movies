const { sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, dataTypes) => {
    const movie = sequelize.define('Movie', {
        title: dataTypes.STRING,
        rating: dataTypes.DECIMAL,
        awards: dataTypes.INTEGER,
        release_date: dataTypes.DATEONLY,
        length: dataTypes.INTEGER,
        genre_id: dataTypes.INTEGER
    }, {
        timestamps: false
    })
    return movie;
}