const express = require('express');
const userCtrl = require('../controllers/user');

// v1
const router = express();
// Login
router.route('/login').post(userCtrl.login);
router.route('/logout').get(userCtrl.logout);

module.exports = router;

