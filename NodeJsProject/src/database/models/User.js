'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
            Users.hasOne(models.Comment)
            User.hasOne(models.Like)
        }
    }
    User.init(
        {
            user_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
              },
              fname: {
                type: Sequelize.STRING(50),
              },
              lname: {
                type: Sequelize.STRING(50),
              },
              user_name: {
                type: Sequelize.STRING(50),
              },
              email: {
                type: Sequelize.STRING(50),
              },
              user_icon: {
                type: Sequelize.STRING(50),
              }
        },
        {
            sequelize,
            modelName: 'User'
        });
    return User;
};