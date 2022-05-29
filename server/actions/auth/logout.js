const logger = require('../../src/utils/logger');

module.exports = async (req, res) =>{
    const session = req.session;
    const user = session?.user?.username;
    
    if (user=== undefined) {
        return res.status(405).json({status: 'error', message: `No one is authenticated.`})
    }

    session.auth = undefined;
    session.user = undefined;
    session.destroy();
    
    logger.info('user', `${session.user} has successful logout.`);
    
    return res.status(202).json({status: 'ok', isAuth: false, message: `${user} has successful logout.`})
}