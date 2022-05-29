const Genre = require('../../db/models/Genre');
const logger = require('../../src/utils/logger');

module.exports = async (req, res) => {
    const genreInput = req.body.genre;
    const genreInputClean = genreInput.trim();

    if (genreInputClean === '') {
        return res.status(412).json({ status: "error", message: 'Check your input value for genre' })
    } else {

        try {
            await Genre.create({
                style: genreInputClean
            })
            logger.info('', `${genreInputClean} added to your database.`)
            res.status(201).json({ status: 'ok', message: `${genreInputClean} added to your database.` })

        } catch (error) {
            logger.error('', `Tried to add ${genreInputClean} but gives ${error.message}`)
            res.status(500).json({ status: 'error', message: error.message })
        }
    }

};
