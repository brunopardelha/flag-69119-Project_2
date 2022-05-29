const getImagePath = require('../../src/utils/getImagePath');
const logger = require('../../src/utils/logger');

module.exports = async (req, res) => {
    const id = req.session?.user._id;

    try {
        const path = await getImagePath('user', id);
    
        if (!path) {
            return res.status(204).send('')
        }
    
        res.status(200).sendFile(path);
        
    } catch (error) {
        logger.error('user', `Unable to get user ${id} picture`)
        res.status(500).send('');
    }

}