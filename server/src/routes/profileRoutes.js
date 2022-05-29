const getAllPlatformAction = require('../../actions/profile/getAllPlatform');
const getAllGenreAction = require('../../actions/profile/getAllGenre');

const profileupdateAction = require('../../actions/profile/profileupdate');
const updateUserImageAction = require('../../actions/profile/updateUserImage');

const userDeleteAction = require('../../actions/profile/userDelete');
const gameDeleteAction = require('../../actions/profile/gameDelete');

const express = require('express');

const router = express.Router();

router.get('/platform/all', getAllPlatformAction);
router.get('/genre/all', getAllGenreAction)

router.put('/update', profileupdateAction);
router.put('/updateimage', updateUserImageAction)

router.delete('/userdelete', userDeleteAction);
router.delete('/gamedelete', gameDeleteAction);



module.exports = router; 
