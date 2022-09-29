'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
        product_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      category_id:
      {
        allowNull: false,
        foreignKey: true,
        type: Sequelize.INTEGER
      },
      manufacturer_id:
      {
        allowNull: false,
        foreignKey: true,
        type: Sequelize.INTEGER
      },
      product_name: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true
      },
      product_image: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true
      },
      description: {
        type: Sequelize.STRING(200),
        allowNull: false
      },
      price: {
        type: Sequelize.STRING(5),
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
  }
};