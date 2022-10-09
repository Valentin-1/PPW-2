'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Like extends Model {
        static associate(models) {
            Like.hasOne(models.Comment)
            Like.belongsTo(models.User)
        }
    }
    Like.init(
        {
            like_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
              },
              user_id: {
                type: DataTypes.INTEGER,
                foreignKey: true,
              },
              comment_id:
              {
                type: DataTypes.INTEGER,
                foreignKey: true,
              }
        },
        {
            sequelize,
            modelName: 'Like'
        });
    return Like;
};