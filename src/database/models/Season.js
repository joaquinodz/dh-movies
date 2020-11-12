const { sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, dataType) => {
    const Season = sequelize.define('Season', {
        title: dataType.STRING,
        number: dataType.INTEGER,
        release_date: dataType.DATE,
        end_date: dataType.DATE
    });
    Season.associate = models => {
        Season.hasMany(models.Episode);
    };
    return Season;
};