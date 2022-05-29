const bcrypt = require('bcrypt');
//FIXME garantir homogeneadade - verificar onde se está a comparar pass e a fazer o hash
const itsEmail = require('../../src/utils/email');
const User = require('../../db/models/User');
const logger = require('../../src/utils/logger');
const check = require('../../services/passwordcheck');


module.exports = async (req, res) => {
    const { name, username, oldpass, pass1, pass2 } = req.body;

    const id = req.session?.user._id;

    const loginUser = await User.findById(id).lean()

    try {
        const newUsername = await User.findOne({ username }).lean();

        if (loginUser.username !== username && newUsername) {
            return res.status(401).json({ status: 'error', message: `Unable to change your username to ${username} because already exists.` })
        }

    } catch (error) {

        logger.error('user', error.message)
        res.status(500).json({ status: 'error', message: 'Error retrieving data from the database.' })
    }

    const oldpassS = oldpass.toString();
    const result = bcrypt.compareSync(oldpassS, loginUser.pass);
    
    if (!result) {
        return res.status(401).json({ status: "error", message: "Impossible to update due to wrong password (old password didn't checkout)" });
    }
    
    const passwordCheck = check(pass1, pass2);

    if (!passwordCheck) {
        return res.status(406).json({ status: 'error', message: 'Password must have at least 6 characters and contain: alphabetical, 1 lowercase and 1 uppercase, at least, and 1 number, minimum.' })
    }
    
    const email = itsEmail(username) ? username : null;
    
    try {
        
        const newPass1 = pass1.toString();
        const newPassHashed = await bcrypt.hash(newPass1, 15);

        const userUpdated = await User.findByIdAndUpdate(id, {
            $set: {
                name,
                username,
                email,
                pass: newPassHashed,
                updated_at: Date.now()
            }
        });

        logger.info('user', `${username} with ${id} updated his info.`)
        res.status(202).json({ status: 'ok', message: `${username} info updated.` });

        req.session.user = userUpdated;

    } catch (error) {
        logger.error('user', `Impossible to update info on ${username} with ${id} due to ${error.message}`)
        res.status(500).json({ status: 'error', message: error.message });
    }
}
