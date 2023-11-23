import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize();

const Reply = sequelize.define('Reply', {
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Reply;
