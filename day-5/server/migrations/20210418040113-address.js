'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('address', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT(11)
      },
      address: {
        type: Sequelize.TEXT
      },
      user_id: {
        type: Sequelize.BIGINT(11)
      },
      province_name: {
        type: Sequelize.STRING(255)
      },
      city: {
        type: Sequelize.STRING(255)
      },
      sub_district: {
        type: Sequelize.STRING(255)
      },
      postal_code: {
        type: Sequelize.STRING(255)
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('address');
  }
};
