const { sequelize, DataTypes } = require('sequelize');

module.exports= (sequelize, dataType) => {
    const Migration = sequelize.define("Migration", {
        migration: dataType.STRING,
        batch: dataType.INTEGER
    });
    return Migration;
};