const bcrypt = require('bcrypt');

const itsEmail = require('../../src/utils/email');
const logger = require('../../src/utils/logger');
const User = require('../../db/models/User');
const check = require('../../services/passwordcheck');

module.exports = async (req, res) => {

    const { pass, confirmPass, name, username } = req.body

    const passClean = pass.toString();

    const passwordCheck = check(pass, confirmPass);

    if (!passwordCheck) {
        return res.status(406).json({ status: 'error', message: 'Password must have at least 6 characters and contain: alphabetical, 1 lowercase and 1 uppercase, at least, and 1 number, minimum.' })
    }

    const passHash = await bcrypt.hash(passClean, 15);
    const email = itsEmail(username) ? username : null;

    try {
        await User.create({
            name,
            username,
            email,
            pass: passHash
        });
        logger.info('user', `${username} was created at ${Date.now()}`)
        res.status(201).json({ status: 'ok', message: `${username} was created.` })

    } catch (error) {
        if (error.code === 11000) {
            return res.status(406).json({ status: 'error', message: `${username} already exists. Try diferent one please.` })
        }
        logger.error('users', `${username} tried to register but gives ${error.message}.`)
        res.status(500).json({ status: 'error', message: error.message })
    }
}