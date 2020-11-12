const { sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, dataType) => {
    const Episode = sequelize.define("Episode", {
        title: dataType.STRING,
        number: dataType.INTEGER,
        release_date: dataType.DATE,
        rating: dataType.INTEGER
    });

    return Episode;
};