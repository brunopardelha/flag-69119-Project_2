const express = require('express');

const registerAction = require('../../actions/auth/register');
const loginAction = require('../../actions/auth/login');
const logoutAction = require('../../actions/auth/logout');
const isAuthAction = require('../../actions/auth/isAuth');

const router = express.Router();

router.post('/register', registerAction);
router.post('/login', loginAction)
router.get('/logout', logoutAction)
router.get('/isAuthenticated', isAuthAction)

module.exports = router;