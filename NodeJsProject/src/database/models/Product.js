'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        static associate(models) {
          Product.belongsTo(models.Category, {foreignKey: 'categoryId'})
          Product.belongsTo(models.Manufacturer, {foreignKey: 'manufacturerId'})
        }
    }
    Product.init(
        {
            product_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
              },
              product_name: {
                type: DataTypes.STRING(50),
              },
              product_image: {
                type: DataTypes.STRING(50),
              },
              description: {
                type: DataTypes.STRING(200),
              },
              price: {
                type: DataTypes.STRING(5),
              },
        },
        {
            sequelize,
            modelName: 'Product'
        });
    return Product;
};