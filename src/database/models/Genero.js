const { sequelize, DataTypes } = require('sequelize');

module.exports= (sequelize, dataType) => {
    const genre = sequelize.define("Genre", {
        name: dataType.STRING,
        ranking: dataType.INTEGER,
        active: dataType.INTEGER
    }, {
        timestamps: false
    })
    return genre;
}