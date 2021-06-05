const ShippingCategory = require('../models/shipping-category');
const { Op } = require("sequelize");

module.exports = {
  getAll: async (req, res, next) => {
    try {
      const shippingCategories = await ShippingCategory.getAll();
      if (shippingCategories) {
        return res.status(200).json(shippingCategories);
      }
      return res.status(400).json({ message: 'Data empty' });
    } catch (error) {
      return next(error);
    }
  },
  getById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const category = await ShippingCategory.findOne(
        {
          where: {
            id
          }
        }
      )

      if (category) {
        return res.status(200).json(category);
      }
      return res.status(400).json({ message: 'Shipping category not foun' });
    } catch (error) {
      next(error);
    }
  },
  create: async (req, res, next) => {
    try {
      const { name } = req.body;
      const find = await ShippingCategory.findOne(
        {
          where: {
            name: {
              [Op.like]: `%${name}`,
            }
          }
        }
      )

      if (find) {
        return res.status(400).json({ message: 'Shipping category is existing' });
      }

      const created = await ShippingCategory._create({
        name,
        status: 1
      })

      if (created) {
        return res.status(201).end();
      }
      return res.status(400).json({ message: 'Error creating shipping category' });
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

      const updated = await ShippingCategory.update({
        status: mapStatus[status]
      }, {
        where: {
          id
        }
      })
      if (updated) {
        return res.status(200).end();
      }
      return res.status(400).json({ message: 'Update shipping category failed' });
    } catch (error) {
      next(error);
    }
  }
}