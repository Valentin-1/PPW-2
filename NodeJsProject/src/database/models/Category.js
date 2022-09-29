'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Category extends Model {
        static associate(models) {
            Category.hasMany(models.Product)
            
        }
    }
    Category.init(
        {
            category_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
              },
              category_name: {
                type: Sequelize.STRING(50),
              },
        },
        {
            sequelize,
            modelName: 'Category'
        });
    return Category;
};