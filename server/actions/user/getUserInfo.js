const logger = require('../../src/utils/logger');

module.exports = async (req, res) => {
    const user = req.session.user

    if (!user) {
        logger.error('user', `Unable to retrieve data of user from session.`)
        return res.status(500).json({ status: 'error', message: 'Unable to retrieve any data.' });
    }
    //TODO verificar se os outputs têm return ou não é preciso
    res.status(200).send(user);
}