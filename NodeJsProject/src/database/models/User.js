'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
            User.hasMany(models.Comment)
            User.hasOne(models.Like)
        }
    }
    User.init(
        {
            user_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
              },
              fname: {
                type: DataTypes.STRING(50),
              },
              lname: {
                type: DataTypes.STRING(50),
              },
              user_name: {
                type: DataTypes.STRING(50),
              },
              email: {
                type: DataTypes.STRING(50),
              },
              user_icon: {
                type: DataTypes.STRING(50),
              }
        },
        {
            sequelize,
            modelName: 'User'
        });
    return User;
};