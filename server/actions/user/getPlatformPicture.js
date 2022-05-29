const getImagePath = require('../../src/utils/getImagePath');
const logger = require('../../src/utils/logger');

module.exports = async (req, res) => {

  const name = req.params.nameplatform

  try {

    const picture = await getImagePath('', name)

    if (!picture) {
      return res.status(204).send()
    }

    res.status(200).sendFile(picture);
  } catch (error) {
    logger.error('', `Unable to retrieve ${name} platform picture.`)
    res.status(500).send()
  }
}