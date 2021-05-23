const express = require('express');
const userCtrl = require('../controllers/user');

// v1
const router = express();
// Users
router.route('/user')
  .get(userCtrl.getUser)
  .post(userCtrl.createUser);

module.exports = router;


// v2
// const router = require('express').Router();
// router.get('user', (req,res)=>{res.send('ok')})
// module.exports = router;

//v3
// module.exports =(router) =>{
//   router.get('/user', (req,res)=>{res.send('ok')})
// }