const Platform = require('../../db/models/Platform');

module.exports = async (_req, res) => {
    try {
        const allPlatforms = await Platform.find({});

        if (!allPlatforms) {
            return res.status(204).send();
        }

        res.status(200).send(allPlatforms);
    } catch (error) {
        res.status(500).send(error);
    }

}