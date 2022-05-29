const logger = require('../../src/utils/logger');
const Game = require('../../db/models/Game');
const User = require('../../db/models/User');

module.exports = async (req, res) => {

    const userID = req.session?.user?._id; 

    let userInfo = {};
    
    try {
        userInfo = await User.findById(userID).lean();

    } catch (error) {
        logger.error('user', `Error retrieving user info. ${error.message}`)
        res.status(500).json({ status: 'error', message: error.message });
    }

    try {
        const resp = await Game.find({ user_id: userID }, 'name platform').populate('platform') // chamada à caracteristica 'platform' e não ao modelo 'Platform'
        res.status(200).json({ status: 'ok', userInfo: userInfo, result: resp });

    } catch (error) {
        logger.error('', `Error retrieving user data. ${error.message}`)
        res.status(500).json({ status: 'error', message: error.message });

    }

}