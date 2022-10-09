'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Comment extends Model {
        static associate(models) {
            Comment.belongsTo(models.Product)
            Comment.belongsTo(models.User)
            Like.belongsTo(models.Comment)
        }
    }
    Comment.init(
        {
            comment_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
              },
              user_id: {
                type: DataTypes.INTEGER,
                foreignKey: true,
              },
        },
        {
            sequelize,
            modelName: 'Comment'
        });
    return Comment;
};