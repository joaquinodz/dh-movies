const { sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, dataTypes) => {
    const User = sequelize.define('User', {
        name: dataTypes.STRING,
        email: dataTypes.STRING,
        password: dataTypes.DATE
    });
    return User;
};