const logger = require('../../src/utils/logger');
const Game = require('../../db/models/Game');

module.exports = async (req, res) => {
    const {gameID, gameName} = req.body;
    const user = req.session.user

    if (gameID === undefined) {
        return res.status(406).json({status: 'error', message: 'No such game in your library.'})
    }

    try {
        await Game.findOneAndDelete(gameID, { user_id: user._id });
        logger.info('user', `Game ${gameName}, with id ${gameID} of ${user.name} (${user._id}) was deleted successfully`);
        res.status(202).json({ status: "ok", message: `Game ${gameName} of ${user.name} was deleted successfully` })
    } catch (error) {
        logger.error('user', `Technical difficulties while deleting the game ${gameName}.`);
        res.status(500).json({ status: "error", message: error.message })
    }
}