'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        static associate(models) {
          Product.belongsTo(models.Category)
          Product.belongsTo(models.Manufacturer)
        }
    }
    Product.init(
        {
            product_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
              },
              category_id:
              {
                type: Sequelize.INTEGER,
                foreignKey: true,
              },
              manufacturer_id:
              {
                type: Sequelize.INTEGER,
                foreignKey: true,
              },
              product_name: {
                type: Sequelize.STRING(50),
              },
              product_image: {
                type: Sequelize.STRING(50),
              },
              description: {
                type: Sequelize.STRING(200),
              },
              price: {
                type: Sequelize.STRING(5),
              },
        },
        {
            sequelize,
            modelName: 'Product'
        });
    return Product;
};