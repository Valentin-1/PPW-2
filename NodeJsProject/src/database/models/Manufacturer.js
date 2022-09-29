'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Manufacturer extends Model {
        static associate(models) {
            Manufacturer.hasOne(models.Product)
        }
    }
    Manufacturer.init(
        {
            manufacturer_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
              },
              manufacturer_name: {
                type: Sequelize.STRING(50),
              },
        },
        {
            sequelize,
            modelName: 'Manufacturer'
        });
    return Manufacturer;
};