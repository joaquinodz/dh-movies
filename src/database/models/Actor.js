const { sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, dataTypes) => {
    const actor = sequelize.define('Actor', {
        first_name: dataTypes.STRING,
        last_name: dataTypes.STRING,
        rating: dataTypes.INTEGER
    }, {
        timestamps: false
    })
    return actor;
}