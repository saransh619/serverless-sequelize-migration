const dotenv = require('dotenv');

dotenv.config();

const coreDatabase = {
  development: {
    dialect: process.env.DB_DIALECT_CORE,
    host: process.env.DB_HOST_CORE,
    port: process.env.DB_PORT_CORE,
    username: process.env.DB_USERNAME_CORE,
    password: process.env.DB_PASSWORD_CORE,
    database: process.env.DB_NAME_CORE,
    seederStorage: 'sequelize',
    seederStorageTableName: 'SequelizeData',
  },
};

module.exports = coreDatabase;
