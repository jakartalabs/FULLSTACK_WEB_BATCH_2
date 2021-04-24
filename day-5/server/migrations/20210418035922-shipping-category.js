'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('shipping_category', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT(11)
      },
      name: {
        type: Sequelize.STRING(255)
      },
      status: {
        type: Sequelize.TINYINT(1)
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('shipping_category');
  }
};
