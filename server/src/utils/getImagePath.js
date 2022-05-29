const { join } = require('path'); 

const Platform = require('../../db/models/Platform');
const User = require('../../db/models/User');

async function getImagePath(x, y) {

    if (x === 'user') {
        
        const infoUser = await User.findById(y).lean().exec();
        return (join(__dirname, '..', '..', 'data', 'users_images', infoUser.picture))
    } else {

        const platform = await Platform.findOne({ platform_name: y })
        
        return ((platform.photo) ? join(__dirname, '..', '..', 'data', 'platform_logos', platform.photo) : '')
    }

}

module.exports = getImagePath;

