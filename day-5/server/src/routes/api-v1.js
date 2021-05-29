const express = require('express');
const userCtrl = require('../controllers/user');
const categoryCtrl = require('../controllers/category');

// v1
const router = express();

// Users
router.route('/user')
  .get(userCtrl.getUser)
//   .post(userCtrl.createUser);

// Category
router.route('/category')
  .get(categoryCtrl.getAll)
  .post(categoryCtrl.create);
router.route('/category/:name')
  .get(categoryCtrl.getByname);
router.route('/category/:id')
  .put(categoryCtrl.update)
  .delete(categoryCtrl.delete);

module.exports = router;

