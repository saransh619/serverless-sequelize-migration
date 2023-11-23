import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize();

const Comment = sequelize.define('Comment', {
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Comment;