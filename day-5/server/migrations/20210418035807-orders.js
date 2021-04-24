'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT(11)
      },
      order_uuid: {
        type: Sequelize.UUID
      },
      user_id: {
        type: Sequelize.BIGINT(11)
      },
      tax: {
        type: Sequelize.DECIMAL(10, 2)
      },
      subtotal: {
        type: Sequelize.DECIMAL(10, 2)
      },
      shipping: {
        type: Sequelize.DECIMAL(10, 2)
      },
      shipping_address_id: {
        type: Sequelize.BIGINT(11)
      },
      shipping_category: {
        type: Sequelize.BIGINT(11)
      },
      payment_method: {
        type: Sequelize.BIGINT(11)
      },
      status: {
        type: Sequelize.TINYINT(1)
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
    await queryInterface.dropTable('orders');
  }
};
