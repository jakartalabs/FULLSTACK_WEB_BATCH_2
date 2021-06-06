const Product = require('../models/product');
const Shipping = require('../models/shipping-category');
const PaymentMethod = require('../models/payment-method');
const Order = require('../models/order');
const OrderDetail = require('../models/order-detail');
const _ = require('lodash');
const { v4 } = require('uuid');
const { Op, sequelize } = require("sequelize");
module.exports = {
  create: async (req, res, next) => {
    try {

      const itemProduct = req.body.item;
      const productIds = itemProduct.map(item => item.id);
      const productFind = await Product.findAll({
        where: {
          id: {
            [Op.in]: itemProduct.map(item => item.id)
          },
        },
        raw: true,
        paranoid: true
      });
      const productFindIds = productFind.map(item => { return { id: item.id, stock: item.stockStatus } });
      //Product not found
      const diffProductId = _.difference(productIds, productFindIds.map(item => item.id));
      // Out stok
      const productStock = _.filter(productFindIds, { stock: 0 })
      if (diffProductId.length || productStock.length) {
        return res.status(400).json({
          message: 'Transaction not allow product not found or out of stock',
          data: {
            productDiff: diffProductId,
            productOutOfStock: productStock
          }
        })
      }

      const shipping = await Shipping.findOne({
        where: {
          id: req.body.shipping
        },
        raw: true
      });
      const paymentMethod = await PaymentMethod.findOne({
        where: {
          id: req.body.paymentMethod
        },
        raw: true
      });
      if (!shipping){
        return res.status(400).json({
          message: 'Transaction not allow shipping not found'
        })
      }
      if (!paymentMethod) {
        return res.status(400).json({
          message: 'Transaction not allow payment method not found'
        })
      }
      
      await Order.sequelize.transaction(async (t)=>{
        const createTransaction = await Order.create({
          orderUuid: v4(),
          shipping: shipping.id,
          paymentMethod: paymentMethod.id,
        },{transaction: t}); 
        const dataProduct = productFindIds.map(item =>{
          return { productId: item.id, orderId:createTransaction.id }
        })
        await OrderDetail.bulkCreate(dataProduct,{transaction:t});
        return createTransaction;
      })

      return res.status(201).send('ok');
    } catch (error) {
      next(error);
    }
  }
}