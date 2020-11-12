const { sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, dataTypes) => {
    const Serie = sequelize.define('Serie', {
        title: dataTypes.STRING,
        release_date: dataTypes.DATE,
        end_date: dataTypes.DATE
    });
    Serie.associate = models => {
        Serie.hasMany(models.Season);
    };
    return Serie;
};