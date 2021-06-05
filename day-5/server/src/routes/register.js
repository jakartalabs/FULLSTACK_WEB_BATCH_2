const express = require('express');
const userCtrl = require('../controllers/user');

// v1
const router = express();
// Login
router.route('/').post(userCtrl.createUser);

module.exports = router;

