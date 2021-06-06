const express = require('express');
const userCtrl = require('../controllers/user');
const categoryCtrl = require('../controllers/category');
const productCtrl = require('../controllers/product');
const shippingCategoryCtrl = require('../controllers/shipping-category');
const paymentMethodCtrl = require('../controllers/payment-method');
const addressCtrl = require('../controllers/address');

// v1
const router = express();

// Users
router.route('/user')
  .get(userCtrl.getUser)
  .post(userCtrl.createUser);

// Category
router.route('/category')
  .get(categoryCtrl.getAll)
  .post(categoryCtrl.create);
router.route('/category/:name')
  .get(categoryCtrl.getByname);
router.route('/category/:id')
  .put(categoryCtrl.update)
  .delete(categoryCtrl.delete);

// Product
router.route('/product')
  .get(productCtrl.getAll)
  .post(productCtrl.create);
router.route('/product/:uuid')
  .get(productCtrl.getByUuid)
  .put(productCtrl.update)
  .delete(productCtrl.delete);
router.route('/product-pdf/:uuid')
  .get(productCtrl.getPdfProduct);

//Shipping Category  
router.route('/shipping-category')
  .get(shippingCategoryCtrl.getAll)
  .post(shippingCategoryCtrl.create);
router.route('/shipping-category/:id')
  .get(shippingCategoryCtrl.getById)
  .put(shippingCategoryCtrl.update);

//Payment Method
router.route('/payment-method')
  .get(paymentMethodCtrl.getAll)
  .post(paymentMethodCtrl.create);
router.route('/payment-method/:id')
  .get(paymentMethodCtrl.getById)
  .put(paymentMethodCtrl.update);

router.route('/address')
  .get(addressCtrl.getAll)
  .post(addressCtrl.create);
router.route('/address/:id')
  .get(addressCtrl.getById)
  .put(addressCtrl.update);

module.exports = router;

