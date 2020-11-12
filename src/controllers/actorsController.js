const { Actor } = require('../database/models');

exports.all = async (req, res) => {
    try {
        const actors = await Actor.findAll();
        res.render('actors', { actors: actors });
    } catch(error) {
        console.log(error);
    }
};

exports.showActor = async (req, res) => {
    try {
        const actorId = req.params.id;
        const query = await Actor.findByPk(actorId, { include: { all: true } });
        // res.json(query)
        res.render('actors', { actorInfo: query });
    } catch(error) {
        console.log(error);
    }
};