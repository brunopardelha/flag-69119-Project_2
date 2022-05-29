const express = require('express'); 

const router = express.Router();

const addPlatform = require('../../actions/add/addplatform');
const addGenre = require('../../actions/add/addgenre');
const addGame = require('../../actions/add/addgame');

router.post('/platform', addPlatform);
router.post('/genre', addGenre);
router.post('/game', addGame);

module.exports = router;