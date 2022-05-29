const bcrypt = require('bcrypt');

const logger = require('../../src/utils/logger');
const User = require('../../db/models/User');

module.exports = async (req, res) => {
    const { user, pass } = req.body

    try {
        const loginUser = await User.findOne({ username: user });

        if (!loginUser) {
            return res.status(404).json({ status: 'error', message: 'User Unknown' })
        }

        const password = pass.toString();
        const result = bcrypt.compareSync(password, loginUser.pass);

        if (!result) {
            return res.status(401).json({ status: 'error', message: 'Bad credentials' });
        }

        logger.info('user', `${req.body.user} login.`);

        const session = req.session;
        session.isAuth = true;
        session.user = loginUser;
        session.save();

        res.status(201).json({ status: 'ok', isAuth: true });

    } catch (error) {
        logger.error('user', `${req.body.user} tried to login but gives ${error.message}`);
        return res.status(404).json({ status: 'error', message: error.message })
    }

}