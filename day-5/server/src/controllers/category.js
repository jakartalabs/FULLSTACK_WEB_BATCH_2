const Category = require('../models/category');
const { Op } = require("sequelize");

module.exports = {
  getAll: async (req, res, next) =>{
    try {
      const categories = await Category.getAll();
      if(categories){
        return res.status(200).json(categories);
      }
      return res.status(400).json({message: 'Data empty'});
    } catch (error) {
      return next(error);
    }
  },
  getByname: async (req, res, next) => {
    try {
      const { name } = req.params;
      const category = await Category.findOne(
        {
          attributes: {
            exclude: ['createdAt','updatedAt', 'deletedAt'],
          },
          where: {
            name: {
              [Op.like]: `%${name}`,
            }
          }
        }
      )

      if (category) {
        return res.status(200).json(category);
      }
      return res.status(400).json({ message: 'Category not foun' });
    } catch (error) {
      next(error);
    }
  },
  create: async (req, res, next) =>{
    try {
      const { name, description } = req.body;
      const find = await Category.findOne(
        {
          where: {
            name: {
              [Op.like]: `%${name}`,
            }
          }
        }
      )

      if (find){
        return res.status(400).json({ message: 'Category is existing' });
      }

      const created = await Category._create({
        name,
        description,
        status: 1
      })

      if(created){
        return res.status(201).end();
      }
      return res.status(400).json({message: 'Error creating category'});
    } catch (error) {
      next(error);
    }
  },
  update: async (req, res, next)=>{
    try {
      const { id } = req.params;
      const { name, description } = req.body;
      const updated = await Category.update({
        name,
        description
      }, {
        where: {
          id
        }
      })
      if (updated) {
        return res.status(200).end();
      }
      return res.status(400).json({ message: 'Update category failed' });
    } catch (error) {
      next(error);
    }
  },
  delete: async (req, res, next) => {
    try {
      const { id } = req.params;
      const updated = await Category.destroy({
        where: {
          id
        }
      })
      if (updated) {
        return res.status(200).end();
      }
      return res.status(400).json({ message: 'Deleted category failed' });
    } catch (error) {
      next(error);
    }
  }
}