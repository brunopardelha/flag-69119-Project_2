const { join, extname } = require('path');
const logger = require('../../src/utils/logger');
const Platform = require('../../db/models/Platform');

module.exports = async (req, res) => {

    let fileName = null;

    const name = req.body.name;
    const image = req.files?.file;

    if (!image) {

        try {

            await Platform.create({ platform_name: name })

            logger.info('', `User added ${name} to platforms.`);
            res.status(201).json({ status: 'ok', message: `Added ${name} to the platform list.` })

        } catch (error) {
            if (error.code === 11000) {
                return res.status(406).json({ status: 'error', message: `${name} with no new data. Change picture?` }) //can I use 417
            }
        }

    } else {

        const plat = await Platform.findOne({ platform_name: name }).lean();

        if (plat.photo) {
            return res.status(406).json({ status: 'error', message: `${name} already in database.` }) //can I use 417
        }

        fileName = `${name}${extname(image.name)}`;
        image.mv(join(__dirname, '..', '..', 'data', 'platform_logos', fileName));

        try {

            await Platform.create({
                platform_name: name,
                photo: fileName
            })

            logger.info('', `User added ${name} to platforms.`);
            return res.status(201).json({ status: 'ok', message: `Added ${name} to the platform list.` })
            
        } catch (error) {
            if (error.code === 11000) {
                await Platform.updateOne({ platform_name: name },
                    {
                        photo: fileName,
                        updated_at: Date.now()
                    })
                    return res.status(201).json({ status: 'ok', message: `Added image to the ${name} platform.` })
            }
            logger.error('user', error.message);
            return res.status(500).json({ status: 'error', message: error.message })
        }
    }
}
