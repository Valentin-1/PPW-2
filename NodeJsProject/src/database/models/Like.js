'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Like extends Model {
        static associate(models) {
            Like.belongsTo(models.Comment)
            Like.belongsTo(models.User)
        }
    }
    Like.init(
        {
            like_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
              },
              user_id: {
                type: Sequelize.INTEGER,
                foreignKey: true,
              },
              comment_id:
              {
                type: Sequelize.INTEGER,
                foreignKey: true,
              }
        },
        {
            sequelize,
            modelName: 'Like'
        });
    return Like;
};