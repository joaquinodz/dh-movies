const { sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, dataTypes) => {
    const Actor = sequelize.define('Actor', {
        first_name: {
            type: dataTypes.STRING
        },
        last_name: {
            type: dataTypes.STRING
        },
        rating: {
            type: dataTypes.INTEGER
        }
    });
    Actor.associate = models => {
        Actor.belongsToMany(models.Movie, {
            through: 'actor_movie'
        });
    };
    return Actor;
};