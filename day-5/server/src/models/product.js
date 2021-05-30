const { Model, DataTypes, QueryTypes } = require('sequelize');
const DBCONNECTION = require('../configs/db');

class Product extends Model {
  static associate(models) {

  }

  static getAll(params) {
    //  Raw query
    const {id} = params;
    return Product.sequelize.query(`
      SELECT 
        p.name AS name,
        p.product_uuid AS uuid,
        p.sku AS sku,
        c.name AS categoryName
      FROM product p
      LEFT JOIN category c on c.id = p.category_id
      WHERE p.id = :id
    `,{
      type: QueryTypes.SELECT,
      model: Product,
      replacements: params,
      mapToModel: true,
      raw: true
    })

    // Sequalize method findAll
    // return Product.findAll();
  }

  static _create(data) {
    return Product.create(data);
  }
};

Product.init({
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.BIGINT
  },
  productUuid: {
    type: DataTypes.UUID
  },
  name: {
    type: DataTypes.TEXT
  },
  sku: {
    type: DataTypes.STRING
  },
  stockStatus: {
    type: DataTypes.TINYINT
  },
  categoryId: {
    type: DataTypes.BIGINT
  },
  farm: {
    type: DataTypes.BIGINT
  },
  freshness: {
    type: DataTypes.STRING
  },
  delivery: {
    type: DataTypes.STRING
  },
  buyBy: {
    type: DataTypes.TEXT
  },
  priceBuyBy: {
    type: DataTypes.TEXT
  },
  discountPercentage: {
    type: DataTypes.INTEGER
  },
  // is Ads
  isAds: {
    type: DataTypes.TINYINT
  },
  rating: {
    type: DataTypes.INTEGER
  },
  description: {
    type: DataTypes.TEXT
  },
  createdAt: {
    type: DataTypes.DATE
  },
  updatedAt: {
    type: DataTypes.DATE
  },
  deletedAt: {
    type: DataTypes.DATE
  }
}, {
  sequelize: DBCONNECTION,
  timestamps: true,
  underscored: true,
  paranoid: true,
  modelName: 'Product',
  tableName: 'product'
});
module.exports = Product;
