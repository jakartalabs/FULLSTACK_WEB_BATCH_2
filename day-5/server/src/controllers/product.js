const Product = require('../models/product');
const Category = require('../models/category');
const { v4 } = require('uuid');
const productUtil  = require('../utils/product');

module.exports = {
  getAll: async (req, res, next) => {
    try {
      // const products = await Product.getAll({id:1});
      const products = await Product.findAll({
        include: [{ model: Category}],
        raw: true,
        nest: true
      })
      if(products){
        return res.status(200).json(products);
      }
      return res.status(400).json({ message: 'Data empty' });
    } catch (error) {
      next(error);
    } 
  },
  getAllByCategory: async (req, res, next) => {
    const { id } = req.params;
    try {
      const products = await Product.findAll({
        include: [{ model: Category }],
        raw: true,
        nest: true,
        where: {
          categoryId: id
        }
      })
      if (products) {
        return res.status(200).json(products);
      }
      return res.status(400).json({ message: 'Data empty' });
    } catch (error) {
      next(error);
    }
  },
  getByUuid: async (req, res, next) => {
    try {
      const { uuid } = req.params;
      const product = await Product.findOne({
        include: [{ model: Category }],
        where: {
          productUuid: uuid,
        },
        raw: true,
        nest: true
      })
      if (product) {
        return res.status(200).json(product);
      }
      return res.status(400).json({ message: 'Data not found' });
    } catch (error) {
      next(error);
    }
  },
  create: async (req, res, next) =>{
    try {
      const data = req.body;
      
      data.productUuid = v4();
      // data.stockStatus = req.body.stockStatus || 0;
      // Freshness 
      /*
        {day: 1}
        {week: 1}
        {month: 1}
      */ 

      // Delivery
      /*
        in days
      */ 

      // buyBy
      /*
        pcs, kgs, box
      */
      const product = await Product.findOne({
        where: {
          sku: req.body.sku
        },
        raw: true
      });
      if(!product){
        const created = await Product._create(data);
        if (created) {
          return res.status(201).end();
        }
      }
      return res.status(400).json({ message: 'Error creating product Or SKU already exist' }); 
    } catch (error) {
      next(error);
    }
  },
  update: async (req, res, next) => {
    try {
      const { uuid } = req.params;
      const updated = await Product.update(req.body, {
        where: {
          productUuid: uuid
        },
        raw: true
      })
      console.log(updated);
      if (updated) {
        return res.status(200).end();
      }
      return res.status(400).json({ message: 'Update product failed' });
    } catch (error) {
      next(error);
    }
  },
  delete: async (req, res, next) => {
    try {
      const { uuid } = req.params;
      const deleted = await Product.destroy({
        where: {
          productUuid: uuid
        }
      })
      if (deleted) {
        return res.status(200).end();
      }
      return res.status(400).json({ message: 'Deleted product failed' });
    } catch (error) {
      next(error);
    }
  },
  getPdfProduct: async(req,res)=>{
    const { uuid } = req.params;
    const product = await Product.findOne({
      include: [{ model: Category }],
      where: {
        productUuid: uuid,
      },
      raw: true,
      nest: true
    })
    if (product) {
      console.log(product);
      const pdf = await productUtil.generatePDFProduct(product);
      res.setHeader('Content-disposition', `attachment; filename=${uuid}.pdf`);
      res.setHeader('Content-Type', 'application/pdf');
      return res.send(pdf);
    }
  },
  getExcelProduct: async (req, res) => {
    const { uuid } = req.params;
    const product = await Product.findOne({
      include: [{ model: Category }],
      where: {
        productUuid: uuid,
      },
      raw: true,
      nest: true
    })
    if (product) {
      const xlsx = await productUtil.generateExcelProduct(product);
      res.setHeader('Content-disposition', `attachment; filename=${uuid}.xlsx`);
      res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
      return res.send(xlsx);
    }
  }
}