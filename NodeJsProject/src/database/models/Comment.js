'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Comment extends Model {
        static associate(models) {
            Comment.belongsTo(models.Product)
            Comment.belongsTo(models.User)
            Comment.hasOne(models.Like)
        }
    }
    Comment.init(
        {
            comment_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
              },
              user_id: {
                type: Sequelize.INTEGER,
                foreignKey: true,
              },
        },
        {
            sequelize,
            modelName: 'Comment'
        });
    return Comment;
};