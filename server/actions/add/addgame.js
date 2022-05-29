const Game = require('../../db/models/Game');

module.exports = async (req, res) => {
  const { gameName, genre, plat } = req.body

  const id = req.session?.user?._id

  if (genre === undefined || plat === undefined || gameName.trim() == '') {
    return res.json({ status: "error", message: 'Check if any information is missing (Genre, Platform or Videogame Name).' }).send()
  }

  const duplicate = await Game.find({ name: gameName, user_id: id, style: genre, platform: plat });

  if (duplicate.length > 0) {
    return res.status(405).json({ status: 'error', message: `${gameName} already added with same Genre and Platform.` })
  }

  try {
    await Game.create({
      name: gameName,
      style: genre,
      platform: plat,
      user_id: id
    });

    res.status(201).json({ status: 'ok', message: `\'${gameName}\' added to the library.` })

  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message })
  }
};
