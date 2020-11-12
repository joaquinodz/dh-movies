const { sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, dataType) => {
    const Season = sequelize.define('Season', {
        title: dataType.STRING,
        number: dataType.INTEGER,
        release_date: dataType.DATE,
        end_date: dataType.DATE
    });
    return Season;
};