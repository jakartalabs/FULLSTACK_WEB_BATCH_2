const PaymentMethod = require('../models/payment-method');
const { Op } = require("sequelize");

module.exports = {
  getAll: async (req, res, next) => {
    try {
      const paymentMethods = await PaymentMethod.getAll();
      if (paymentMethods) {
        return res.status(200).json(paymentMethods);
      }
      return res.status(400).json({ message: 'Data empty' });
    } catch (error) {
      return next(error);
    }
  },
  getById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const paymentMethod = await PaymentMethod.findOne(
        {
          where: {
            id
          }
        }
      )

      if (paymentMethod) {
        return res.status(200).json(paymentMethod);
      }
      return res.status(400).json({ message: 'Payment method not foun' });
    } catch (error) {
      next(error);
    }
  },
  create: async (req, res, next) => {
    try {
      const { name } = req.body;
      const find = await PaymentMethod.findOne(
        {
          where: {
            name: {
              [Op.like]: `%${name}`,
            }
          }
        }
      )

      if (find) {
        return res.status(400).json({ message: 'Payment method is existing' });
      }

      const created = await PaymentMethod._create({
        name,
        status: 1
      })

      if (created) {
        return res.status(201).end();
      }
      return res.status(400).json({ message: 'Error creating payment method' });
    } catch (error) {
      next(error);
    }
  },
  update: async (req, res, next) => {
    try {
      const { id } = req.params;
      const { status } = req.body;
      const mapStatus = {
        DISACTIVE: 0,
        ACTIVE: 1,
      }

      const updated = await PaymentMethod.update({
        status: mapStatus[status]
      }, {
        where: {
          id
        }
      })
      if (updated) {
        return res.status(200).end();
      }
      return res.status(400).json({ message: 'Update payment method failed' });
    } catch (error) {
      next(error);
    }
  }
}