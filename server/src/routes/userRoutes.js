const express = require('express');

const router = express.Router();

const getUserInfoAction = require('../../actions/user/getUserInfo');
const getUserPictureAction = require('../../actions/user/getUserPicture');
const getUserDataAction = require('../../actions/user/getUserData');
const getPlatformPictureAction = require('../../actions/user/getPlatformPicture');

router.get('/', getUserInfoAction);
router.get('/picture', getUserPictureAction);
router.get('/fordash', getUserDataAction);
router.get('/platform/:nameplatform', getPlatformPictureAction);


module.exports = router;
