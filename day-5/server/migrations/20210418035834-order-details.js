'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('order_details', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT(11)
      },
      orders_id: {
        type: Sequelize.BIGINT(11)
      },
      product_id: {
        type: Sequelize.BIGINT(11)
      },
      price: {
        type: Sequelize.DECIMAL(10,2)
      },
      discount: {
        type: Sequelize.DECIMAL(10, 2)
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      quantity_type: {
        type: Sequelize.STRING(25)
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
    await queryInterface.dropTable('order_details');
  }
};
