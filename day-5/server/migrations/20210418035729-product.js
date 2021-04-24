'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('product', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT(11)
      },
      product_uuid: {
        type: Sequelize.UUID
      },
      sku: {
        type: Sequelize.STRING(36)
      },
      stock_status: {
        type: Sequelize.TINYINT(1)
      },
      category_id: {
        type: Sequelize.BIGINT(11)
      },
      farm: {
        type: Sequelize.BIGINT(11)
      },
      freshness: {
        type: Sequelize.STRING(10)
      },
      delivery: {
        type: Sequelize.STRING(10)
      },
      buy_by: {
        type: Sequelize.TEXT
      },
      price_buy_by: {
        type: Sequelize.TEXT
      },
      discount_percentage: {
        type: Sequelize.INTEGER(2)
      },
      rating: {
        type: Sequelize.INTEGER(3)
      },
      description: {
        type: Sequelize.TEXT
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: true
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: true
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('product');
  }
};
