'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT(11)
      },
      user_uuid: {
        type: Sequelize.UUID
      },
      name: {
        type: Sequelize.STRING(60)
      },
      email: {
        type: Sequelize.STRING(60)
      },
      phone: {
        type: Sequelize.STRING(14)
      },
      password: {
        type: Sequelize.STRING(255)
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
    await queryInterface.dropTable('users');
  }
};
