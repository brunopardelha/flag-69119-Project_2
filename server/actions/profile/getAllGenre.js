const Genre = require('../../db/models/Genre');

module.exports = async (_req, res) => {
    try {
        const allGenre = await Genre.find({});

        if (!allGenre) {
            return res.status(204).send();
        }

        res.status(200).send(allGenre);
    } catch (error) {
        res.status(500).send(error);
    }

}