const { join, extname } = require('path');
const { unlink } = require('fs/promises');

const User = require("../../db/models/User");

module.exports = async (req, res) => {
    const id = req.session?.user._id;

    const file= req.files?.image;

    if (!file) {
        return res.json({ status: 'error', message: 'No file uploaded.' })
    }

    let fileName;

    try {

        const user = await User.findById(id);

        if (file) {

            if (user.picture) {
                await unlink(join(__dirname, '..', '..', 'data', 'users_images', user.picture));
            }

            fileName = `${id}${extname(file.name)}`;
            file.mv(join(__dirname, '..', '..', 'data', 'users_images', fileName));

            user.picture = fileName;

            await user.save();
        }

        res.status(202).json({ status: 'ok', message: 'Image user updated' })
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message })
    }

}