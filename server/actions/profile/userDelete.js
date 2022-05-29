const logger = require('../../src/utils/logger');
const User = require('../../db/models/User');

module.exports = async (req, res) => {

    const session = req.session

    const user = session.user

    try {
        await User.findByIdAndRemove(user._id);
        logger.info('user', `User with ${user.name} and ${user._id} was deleted from the database.`);
        res.status(202).json({ status: "ok", message: 'User deleted.' });

        session.auth = undefined;
        session.user = undefined;
        session.destroy();

    } catch (error) {
        logger.error('user', error.message)
        res.status(500).json({ status: "error", message: error.message })
    }

}